using FluentValidation;
using FluentValidation.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TCC.Aplicacao.Features.Arquivos.Command
{
    public class ArquivoDeleteCommand
    {
        public virtual int[] ArquivoIds { get; set; }

        public virtual ValidationResult Validar()
        {
            return new ProdutoDeleteCommandValidator().Validate(this);
        }

        class ProdutoDeleteCommandValidator : AbstractValidator<ArquivoDeleteCommand>
        {
            public ProdutoDeleteCommandValidator()
            {
                RuleFor(x => x.ArquivoIds).NotNull();
                RuleFor(x => x.ArquivoIds.Length).GreaterThan(0);
            }
        }
    }
}
