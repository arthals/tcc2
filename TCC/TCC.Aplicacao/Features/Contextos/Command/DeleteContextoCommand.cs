using FluentValidation;
using FluentValidation.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TCC.Aplicacao.Features.Contextos.Command
{
    public class DeleteContextoCommand
    {
        public int[] Ids { get; set; }

        public virtual ValidationResult Validar()
        {
            return new DeleteClienteCommandValidator().Validate(this);
        }

        class DeleteClienteCommandValidator : AbstractValidator<DeleteContextoCommand>
        {
            public DeleteClienteCommandValidator()
            {
                RuleFor(x => x.Ids).NotNull();
                RuleFor(x => x.Ids.Length).GreaterThan(0);
            }
        }
    }
}
