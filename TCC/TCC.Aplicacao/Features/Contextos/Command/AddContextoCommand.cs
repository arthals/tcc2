using FluentValidation;
using FluentValidation.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TCC.Dominio.Features.Arquivos;

namespace TCC.Aplicacao.Features.Contextos.Command
{
    public class AddContextoCommand
    {
        public int IdTexto { get; set; }
        public string Trecho { get; set; }
        public string Significado { get; set; }

        public virtual ValidationResult Validar()
        {
            return new DeleteClienteCommandValidator().Validate(this);
        }

        class DeleteClienteCommandValidator : AbstractValidator<AddContextoCommand>
        {
            public DeleteClienteCommandValidator()
            {
                RuleFor(x => x.Trecho).NotNull();
                RuleFor(x => x.Significado).NotNull();
            }
        }
    }
}
