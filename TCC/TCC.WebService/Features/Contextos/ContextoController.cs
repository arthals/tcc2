using AutoMapper;
using Microsoft.AspNet.OData.Query;
using System.Linq;
using System.Web.Http;
using TCC.Aplicacao.Features.Contextos;
using TCC.Aplicacao.Features.Contextos.Command;
using TCC.Aplicacao.Features.Contextos.ViewModel;
using TCC.Dominio.Features.Contextos;
using TCC.WebService.Features.Comum;
using TCC.WebService.Filters;

namespace TCC.WebService.Features.Contextos
{
    [RoutePrefix("api/Contexto")]
    public class ContextoController : ApiControlleBase
    {
        public IContextoService _notaFiscalService;

        public ContextoController(IContextoService notaFiscalService) : base()
        {
            _notaFiscalService = notaFiscalService;
        }

        [HttpGet]
        [ODataQueryOptionsValidate]
        public IHttpActionResult Get(ODataQueryOptions<Contexto> queryOptions)
        {
            var query = default(IQueryable<Contexto>);

            query = _notaFiscalService.GetAll();

            return HandleQueryable<Contexto, ContextoViewModel>(query, queryOptions);
        }

        [HttpGet]
        [Route("{id:int}")]
        public IHttpActionResult GetById(int id)
        {
            return HandleCallback(() => Mapper.Map<ContextoViewModel>(_notaFiscalService.GetById(id)));
        }

        [HttpPost]
        public IHttpActionResult Post(AddContextoCommand notaFiscal)
        {
            return HandleCallback(() => _notaFiscalService.Add(notaFiscal));
        }


        [HttpDelete]
        public IHttpActionResult Delete(DeleteContextoCommand notaFiscal)
        {
            var validator = notaFiscal.Validar();
            if (!validator.IsValid)
                return HandleValidationFailure(validator.Errors);
            return HandleCallback(() => _notaFiscalService.Delete(notaFiscal));
        }

    }
}