using System;
using System.Runtime.Serialization;

namespace TCC.Infra.Dados.Features.Arquivos
{
    [Serializable]
    internal class NaoEncontradoException : Exception
    {
        public NaoEncontradoException()
        {
        }

        public NaoEncontradoException(string message) : base(message)
        {
        }

        public NaoEncontradoException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected NaoEncontradoException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}