using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TCC.Dominio.Features.Arquivos;
using TCC.Infra.Dados.Context;

namespace TCC.Infra.Dados.Features.Arquivos
{
    public class ArquivoRepository : IArquivoRepository
    {
        private TCCContext _context;
        public ArquivoRepository(TCCContext context)
        {
            _context = context;
        }
        

        public Arquivo Add(Arquivo arquivo)
        {
            var newCliente = _context.Arquivos.Add(arquivo);
            // Salva no banco
            _context.SaveChanges();
            // Retorna a nova cliente com id atualizado
            return newCliente;
        }

        public bool Delete(int Id)
        {
            var contaCorrente = _context.Arquivos.Where(c => c.Id == Id).FirstOrDefault();
            if (contaCorrente == null)
                throw new NaoEncontradoException();
            _context.Entry(contaCorrente).State = EntityState.Deleted;
            return _context.SaveChanges() > 0;
        }

        public IQueryable<Arquivo> GetAll() => _context.Arquivos;

        public Arquivo GetById(long id) => _context.Arquivos.Where(a => a.Id == id).FirstOrDefault();
    }
}
