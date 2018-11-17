using FluentValidation;
using FluentValidation.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TCC.Aplicacao.Features.Contextos.Command
{
    public class UpdateContextoCommand
    {
        public int Id { get; set; }
        public string Trecho { get; set; }
        public string Significado { get; set; }

        public virtual ValidationResult Validar()
        {
            return new UpdateArquivosInContextoCommandValidator().Validate(this);
        }

        class UpdateArquivosInContextoCommandValidator : AbstractValidator<UpdateContextoCommand>
        {
            public UpdateArquivosInContextoCommandValidator()
            {
                RuleFor(x => x.Id).NotNull().GreaterThan(0);
                RuleFor(x => x.Trecho).NotNull();
                RuleFor(x => x.Significado).NotNull();
            }
        }

    }
}
