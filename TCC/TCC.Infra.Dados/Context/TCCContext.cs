using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TCC.Dominio.Features.Arquivos;
using TCC.Dominio.Features.Contextos;
using TCC.Dominio.Features.Textos;
using TCC.Dominio.Features.Usuarios;

namespace TCC.Infra.Dados.Context
{
    public class TCCContext : DbContext
    {
        public DbSet<Arquivo> Arquivos { get; set; }
        public DbSet<Contexto> Contextos{ get; set; }
        public DbSet<Texto> Textos { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }

        public TCCContext() : base("TCC")
        {
            Configuration.LazyLoadingEnabled = true;
        }
        public TCCContext(DbConnection connection) : base(connection, true){ }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            // Busca todos as configurações criadas nesse assembly, que são as classes que são derivadas de EntityTypeConfiguration
            modelBuilder.Configurations.AddFromAssembly(System.Reflection.Assembly.GetExecutingAssembly());
            // Chama o OnModelCreating do EF para dar continuidade na criação do modelo
            base.OnModelCreating(modelBuilder);
        }
    }
}
