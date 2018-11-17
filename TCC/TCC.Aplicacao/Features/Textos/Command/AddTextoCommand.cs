using FluentValidation;
using FluentValidation.Results;

namespace TCC.Aplicacao.Features.Textos.Command
{
    public class AddTextoCommand
    {
        public string Palavras { get; set; }

        public virtual ValidationResult Validar()
        {
            return new DeleteClienteCommandValidator().Validate(this);
        }

        class DeleteClienteCommandValidator : AbstractValidator<AddTextoCommand>
        {
            public DeleteClienteCommandValidator()
            {
                RuleFor(x => x.Palavras).NotNull();
            }
        }
    }
}
