using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TCC.Dominio.Features.Arquivos;

namespace TCC.Infra.Dados.Features.Arquivos
{
    public class ArquivoEntityConfiguration : EntityTypeConfiguration<Arquivo>
    {
        public ArquivoEntityConfiguration()
        {
            this.ToTable("TBArquivo");

            this.HasKey(x => x.Id);

            this.Property(x => x.Caminho);
            this.Property(x => x.Name);
        }
    }
}
