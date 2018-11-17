using System.Linq;
using TCC.Aplicacao.Features.Textos.Command;
using TCC.Dominio.Features.Textos;

namespace TCC.Aplicacao.Features.Textos
{
    public interface ITextoService
    {
        long Add(AddTextoCommand texto);
        bool Update(UpdateTextoCommand texto);
        bool Delete(DeleteTextoCommand Id);
        IQueryable<Texto> GetAll();
        Texto GetById(long id);
    }
}
