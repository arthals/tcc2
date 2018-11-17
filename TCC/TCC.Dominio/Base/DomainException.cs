using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TCC.Dominio.Base
{
    public class DomainException : Exception
    {
        private string v;

        public DomainException(CodigosDeErro codigosDeErro, string message) : base(message)
        {
            CodigosDeErro = codigosDeErro;
        }

        protected DomainException(string v)
        {
            this.v = v;
        }

        public CodigosDeErro CodigosDeErro { get; }
    }
}
