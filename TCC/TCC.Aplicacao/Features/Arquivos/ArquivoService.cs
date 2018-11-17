using AutoMapper;
using System.Linq;
using TCC.Aplicacao.Features.Arquivos.Command;
using TCC.Dominio.Features.Arquivos;

namespace TCC.Aplicacao.Features.Arquivos
{
    public class ArquivoService : IArquivoService
    {
        IArquivoRepository _ArquivoRepository;
        public ArquivoService(IArquivoRepository arquivoRepository)
        {
            _ArquivoRepository = arquivoRepository;
        }
        public long Add(ArquivoAddCommand arquivo)
        {
            var _produto = Mapper.Map<ArquivoAddCommand, Arquivo>(arquivo);
            var novoProduto = _ArquivoRepository.Add(_produto);

            return novoProduto.Id;
        }

        public bool Delete(ArquivoDeleteCommand arquivo)
        {
            var isRemovedAll = true;
            foreach (var arquivoId in arquivo.ArquivoIds)
            {
                var isRemoved = _ArquivoRepository.Delete(arquivoId);

                isRemovedAll = isRemoved ? isRemovedAll : false;
            }
            return isRemovedAll;
        }

        public IQueryable<Arquivo> GetAll() => _ArquivoRepository.GetAll();

        public Arquivo GetById(long id) => _ArquivoRepository.GetById(id);
    }
}
