using System.Collections.Generic;
using TCC.Dominio.Abstrato;
using TCC.Dominio.Features.Contextos;
using TCC.Dominio.Features.Usuarios;

namespace TCC.Dominio.Features.Textos
{
    public class Texto : Entidade
    {
        public List<Contexto> Contextos{ get; set; }
        public string Palavras { get; set; }
        //public Usuario Revisor { get; set; }
        //public Usuario Escritor { get; set; }
        //public TipoDeAcesso TipoDeAcesso { get; set; } 
    }
}
