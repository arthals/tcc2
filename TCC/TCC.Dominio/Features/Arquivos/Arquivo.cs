using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TCC.Dominio.Abstrato;

namespace TCC.Dominio.Features.Arquivos
{
    public class Arquivo : Entidade
    {
        public string Caminho { get; set; }
        public string Name { get; set; }
    }
}
