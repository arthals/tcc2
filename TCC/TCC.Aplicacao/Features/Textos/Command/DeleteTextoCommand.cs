using FluentValidation;
using FluentValidation.Results;

namespace TCC.Aplicacao.Features.Textos.Command
{
    public class DeleteTextoCommand
    {
        public int[] Ids { get; set; }

        public virtual ValidationResult Validar()
        {
            return new DeleteClienteCommandValidator().Validate(this);
        }

        class DeleteClienteCommandValidator : AbstractValidator<DeleteTextoCommand>
        {
            public DeleteClienteCommandValidator()
            {
                RuleFor(x => x.Ids).NotNull();
                RuleFor(x => x.Ids.Length).GreaterThan(0);
            }
        }
    }
}
