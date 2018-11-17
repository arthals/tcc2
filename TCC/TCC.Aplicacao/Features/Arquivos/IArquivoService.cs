using System.Linq;
using TCC.Aplicacao.Features.Arquivos.Command;
using TCC.Dominio.Features.Arquivos;

namespace TCC.Aplicacao.Features.Arquivos
{
    public interface IArquivoService
    {
        long Add(ArquivoAddCommand arquivo);
        bool Delete(ArquivoDeleteCommand arquivo);
        IQueryable<Arquivo> GetAll();
        Arquivo GetById(long id);
    }
}
