using SimpleInjector;
using SimpleInjector.Integration.WebApi;
using SimpleInjector.Lifestyles;
using System.Web.Http;
using TCC.Aplicacao.Features.Arquivos;
using TCC.Aplicacao.Features.Contextos;
using TCC.Aplicacao.Features.Textos;
using TCC.Dominio.Features.Arquivos;
using TCC.Dominio.Features.Contextos;
using TCC.Dominio.Features.Textos;
using TCC.Infra.Dados.Context;
using TCC.Infra.Dados.Features.Arquivos;
using TCC.Infra.Dados.Features.Contextos;
using TCC.Infra.Dados.Features.Textos;

namespace TCC.WebService.IoC
{
    public class SimpleInjectorContainer
    {
        public static void Initialize()
        {
            var container = new Container();

            container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();
            //Registrando as Implementações

            RegisterServices(container);

            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);

            container.Verify();

            GlobalConfiguration.Configuration.DependencyResolver =
                         new SimpleInjectorWebApiDependencyResolver(container);
        }

        private static void RegisterServices(Container container)
        {
            container.Register<ITextoService, Textoservice>();
            container.Register<ITextoRepository, TextoRepository>();
            container.Register<IContextoService, ContextoService>();
            container.Register<IContextoRepository, ContextoRepository>();
            container.Register<IArquivoService, ArquivoService>();
            container.Register<IArquivoRepository, ArquivoRepository>();

            container.Register(() => new TCCContext(), Lifestyle.Scoped);

        }
    }
}