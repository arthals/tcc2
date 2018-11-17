using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TCC.Dominio.Features.Arquivos
{
    public interface IArquivoRepository
    {
        Arquivo Add(Arquivo arquivo);
        bool Delete(int Id);
        IQueryable<Arquivo> GetAll();
        Arquivo GetById(long id);
    }
}
