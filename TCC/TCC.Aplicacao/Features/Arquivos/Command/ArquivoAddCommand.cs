using FluentValidation;
using FluentValidation.Results;

namespace TCC.Aplicacao.Features.Arquivos.Command
{
    public class ArquivoAddCommand
    {
        public string Caminho { get; set; }
        public string Name { get; set; }
        public int IdContexto { get; set; }

        public virtual ValidationResult Validar()
        {
            return new DeleteClienteCommandValidator().Validate(this);
        }

        class DeleteClienteCommandValidator : AbstractValidator<ArquivoAddCommand>
        {
            public DeleteClienteCommandValidator()
            {
                RuleFor(x => x.Caminho).NotNull();
                RuleFor(x => x.Name).NotNull();
            }
        }
    }
}