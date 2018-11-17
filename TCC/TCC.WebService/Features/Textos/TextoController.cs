using AutoMapper;
using Microsoft.AspNet.OData.Query;
using System.Linq;
using System.Web.Http;
using TCC.Aplicacao.Features.Textos;
using TCC.Aplicacao.Features.Textos.Command;
using TCC.Aplicacao.Features.Textos.ViewModel;
using TCC.Dominio.Features.Textos;
using TCC.WebService.Features.Comum;
using TCC.WebService.Filters;

namespace TCC.WebService.Features.Textos
{
    [RoutePrefix("api/Texto")]
    public class TextoController : ApiControlleBase
    {
        public ITextoService _notaFiscalService;

        public TextoController(ITextoService notaFiscalService) : base()
        {
            _notaFiscalService = notaFiscalService;
        }

        [HttpGet]
        [ODataQueryOptionsValidate]
        public IHttpActionResult Get(ODataQueryOptions<Texto> queryOptions)
        {
            var query = default(IQueryable<Texto>);

            query = _notaFiscalService.GetAll();

            return HandleQueryable<Texto, TextoViewModel>(query, queryOptions);
        }

        [HttpGet]
        [Route("{id:int}")]
        public IHttpActionResult GetById(int id)
        {
            return HandleCallback(() => Mapper.Map<TextoViewModel>(_notaFiscalService.GetById(id)));
        }

        [HttpPost]
        public IHttpActionResult Post(AddTextoCommand notaFiscal)
        {
            return HandleCallback(() => _notaFiscalService.Add(notaFiscal));
        }


        [HttpDelete]
        public IHttpActionResult Delete(DeleteTextoCommand notaFiscal)
        {
            var validator = notaFiscal.Validar();
            if (!validator.IsValid)
                return HandleValidationFailure(validator.Errors);
            return HandleCallback(() => _notaFiscalService.Delete(notaFiscal));
        }

    }
}