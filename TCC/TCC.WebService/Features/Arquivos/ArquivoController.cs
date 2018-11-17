using AutoMapper;
using Microsoft.AspNet.OData.Query;
using System.Linq;
using System.Web.Http;
using TCC.Aplicacao.Features.Arquivos;
using TCC.Aplicacao.Features.Arquivos.Command;
using TCC.Aplicacao.Features.Arquivos.ViewModel;
using TCC.Dominio.Features.Arquivos;
using TCC.WebService.Features.Comum;
using TCC.WebService.Filters;

namespace TCC.WebService.Features.Arquivos
{
    [RoutePrefix("api/arquivo")]
    public class ArquivoController : ApiControlleBase
    {
        public IArquivoService _notaFiscalService;

        public ArquivoController(IArquivoService notaFiscalService) : base()
        {
            _notaFiscalService = notaFiscalService;
        }

        [HttpGet]
        [ODataQueryOptionsValidate]
        public IHttpActionResult Get(ODataQueryOptions<Arquivo> queryOptions)
        {
            var query = default(IQueryable<Arquivo>);

            query = _notaFiscalService.GetAll();

            return HandleQueryable<Arquivo, ArquivoViewModel>(query, queryOptions);
        }

        [HttpGet]
        [Route("{id:int}")]
        public IHttpActionResult GetById(int id)
        {
            return HandleCallback(() => Mapper.Map<ArquivoViewModel>(_notaFiscalService.GetById(id)));
        }

        [HttpPost]
        public IHttpActionResult Post(ArquivoAddCommand notaFiscal)
        {
            return HandleCallback(() => _notaFiscalService.Add(notaFiscal));
        }
        

        [HttpDelete]
        public IHttpActionResult Delete(ArquivoDeleteCommand notaFiscal)
        {
            var validator = notaFiscal.Validar();
            if (!validator.IsValid)
                return HandleValidationFailure(validator.Errors);
            return HandleCallback(() => _notaFiscalService.Delete(notaFiscal));
        }
    }
}