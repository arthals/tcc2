using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TCC.Dominio.Features.Textos;

namespace TCC.Infra.Dados.Features.Textos
{
    public class TextoEntityConfiguration : EntityTypeConfiguration<Texto>
    {
        public TextoEntityConfiguration()
        {
            this.ToTable("TBTexto");

            this.HasKey(x => x.Id);

            //this.HasRequired(x => x.Escritor).WithMany();
            //this.HasOptional(x => x.Revisor);
            this.Property(x => x.Palavras).IsRequired();
            //this.Property(x => x.TipoDeAcesso).IsRequired();
            this.HasMany(x => x.Contextos).WithMany();
        }
    }
}
