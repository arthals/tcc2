using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using TCC.Dominio.Features.Contextos;
using TCC.Dominio.Features.Textos;
using TCC.Infra.Dados.Context;
using TCC.Infra.Dados.Features.Arquivos;

namespace TCC.Infra.Dados.Features.Textos
{
    public class TextoRepository : ITextoRepository
    {

        private TCCContext _context;
        public TextoRepository(TCCContext context)
        {
            _context = context;
        }


        public Texto Add(Texto texto)
        {
            var newCliente = _context.Textos.Add(texto);
            // Salva no banco
            _context.SaveChanges();
            // Retorna a nova cliente com id atualizado
            return newCliente;
        }

        public void ContextoAdd(long id, Contexto contexto)
        {
            Texto txt = GetById(id);
            if (txt.Contextos == null)
                txt.Contextos = new List<Contexto>();

            txt.Contextos.Add(contexto);
            Update(txt);
        }

        public bool Delete(int Id)
        {
            var contexto = GetById(Id);
            if (contexto == null)
                throw new NaoEncontradoException();
            _context.Entry(contexto).State = EntityState.Deleted;
            return _context.SaveChanges() > 0;
        }

        public IQueryable<Texto> GetAll() => _context.Textos;

        public Texto GetById(long id) => _context.Textos.Where(c => c.Id == id).FirstOrDefault();

        public bool Update(Texto contexto)
        {
            // Altera o estado
            _context.Entry(contexto).State = EntityState.Modified;
            // Salva mudanças
            return _context.SaveChanges() > 0;
        }
    }
}
