using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TCC.Dominio.Features.Usuarios;

namespace TCC.Infra.Dados.Features.Usuarios
{
    public class UsuarioEntityConfiguration : EntityTypeConfiguration<Usuario>
    {
        public UsuarioEntityConfiguration()
        {
            this.ToTable("TBUsuario");

            this.HasKey(x => x.Id);

            this.Property(x => x.Nome).IsRequired();
            this.Property(x => x.Senha).IsRequired();
            this.HasMany(x => x.Propriedades).WithMany();
        }
    }
}
