using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TCC.Dominio.Abstrato;
using TCC.Dominio.Features.Arquivos;

namespace TCC.Dominio.Features.Contextos
{
    public class Contexto :Entidade
    {
        public string Trecho { get; set; }
        public string Significado { get; set; }
        public List<Arquivo> arquivos { get; set; }

        //public int UseRatte { get; set; }
        //public int UnlikeRatte { get; set; }
        //public int LikeRatte { get; set; }
    }
}