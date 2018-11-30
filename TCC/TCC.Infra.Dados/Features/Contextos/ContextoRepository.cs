using System.Data.Entity;
using System.Linq;
using TCC.Dominio.Features.Arquivos;
using TCC.Dominio.Features.Contextos;
using TCC.Infra.Dados.Context;
using TCC.Infra.Dados.Features.Arquivos;

namespace TCC.Infra.Dados.Features.Contextos
{
    public class ContextoRepository : IContextoRepository
    {
        private TCCContext _context;
        public ContextoRepository(TCCContext context)
        {
            _context = context;
        }


        public Contexto Add(Contexto contexto)
        {
            var newCliente = _context.Contextos.Add(contexto);
            // Salva no banco
            _context.SaveChanges();
            // Retorna a nova cliente com id atualizado
            return newCliente;
        }

        public void AddArquivoNoContexto(long id, Arquivo arquivo)
        {
            Contexto cont = GetById(id);
            cont.arquivos.Add(arquivo);
            Update(cont);
        }

        public bool Delete(int Id)
        {
            var contexto = _context.Contextos.Where(c => c.Id == Id).FirstOrDefault();
            if (contexto == null)
                throw new NaoEncontradoException();
            _context.Entry(contexto).State = EntityState.Deleted;
            return _context.SaveChanges() > 0;
        }

        public IQueryable<Contexto> GetAll() => _context.Contextos;

        public Contexto GetById(long id) => _context.Contextos.Find(id);

        public bool Update(Contexto contexto)
        {
            // Altera o estado
            _context.Entry(contexto).State = EntityState.Modified;
            // Salva mudanças
            return _context.SaveChanges() > 0;
        }
    }
}
