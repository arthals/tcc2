using System.Collections.Generic;
using TCC.Dominio.Abstrato;
using TCC.Dominio.Features.Textos;

namespace TCC.Dominio.Features.Usuarios
{
    public class Usuario : Entidade
    {
        public string Nome { get; set; }
        public string Senha { get; set; }
        public List<Texto> Propriedades { get; set; }
    }
}
