using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TCC.Dominio.Features.Contextos
{
    public interface IContextoRepository
    {
        Contexto Add(Contexto contexto);
        bool Update(Contexto contexto);
        bool Delete(int Id);
        IQueryable<Contexto> GetAll();
        Contexto GetById(long id);
    }
}
