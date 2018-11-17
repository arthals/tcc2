using FluentValidation;
using FluentValidation.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TCC.Aplicacao.Features.Textos.Command
{
    public class UpdateTextoCommand
    {
        public int Id { get; set; }
        public string Palavras { get; set; }

        public virtual ValidationResult Validar()
        {
            return new DeleteClienteCommandValidator().Validate(this);
        }

        class DeleteClienteCommandValidator : AbstractValidator<UpdateTextoCommand>
        {
            public DeleteClienteCommandValidator()
            {
                RuleFor(x => x.Id).NotNull().GreaterThan(0);
                RuleFor(x => x.Palavras).NotNull();
            }
        }
    }
}
