using System.Linq;
using TCC.Dominio.Features.Contextos;

namespace TCC.Dominio.Features.Textos
{
    public interface ITextoRepository
    {
        Texto Add(Texto texto);
        bool Update(Texto texto);
        bool Delete(int Id);
        IQueryable<Texto> GetAll();
        Texto GetById(long id);
        void ContextoAdd(long id, Contexto contexto);
    }
}
