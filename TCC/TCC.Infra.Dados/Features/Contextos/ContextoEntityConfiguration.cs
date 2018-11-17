using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TCC.Dominio.Features.Contextos;

namespace TCC.Infra.Dados.Features.Contextos
{
    public class ContextoEntityConfiguration : EntityTypeConfiguration<Contexto>
    {
        public ContextoEntityConfiguration()
        {
            this.ToTable("TBContexto");

            this.HasKey(x => x.Id);

            this.HasMany(x => x.arquivos).WithMany();
            //this.Property(x => x.LikeRatte);
            this.Property(x => x.Trecho).IsRequired();
            //this.Property(x => x.UnlikeRatte);
            //this.Property(x => x.UseRatte);
        }
    }
}
