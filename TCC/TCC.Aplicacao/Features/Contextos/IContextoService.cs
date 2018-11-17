using System.Linq;
using TCC.Aplicacao.Features.Contextos.Command;
using TCC.Dominio.Features.Contextos;

namespace TCC.Aplicacao.Features.Contextos
{
    public interface IContextoService
    {
        long Add(AddContextoCommand contexto);
        bool Update(UpdateContextoCommand contexto);
        bool Delete(DeleteContextoCommand contexto);
        IQueryable<Contexto> GetAll();
        Contexto GetById(long id);
    }
}
