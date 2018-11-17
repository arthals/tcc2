using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using TCC.Aplicacao.config.AutoMapper;
using TCC.WebService.IoC;

namespace TCC.WebService
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            AutoMapperConfig.Initialize();
            SimpleInjectorContainer.Initialize();
        }
    }
}
