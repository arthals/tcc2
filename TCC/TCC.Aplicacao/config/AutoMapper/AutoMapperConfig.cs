using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TCC.Aplicacao.config.AutoMapper
{
        public class AutoMapperConfig
        {
            public static void Initialize()
            {
                Mapper.Initialize(cfg =>
                {
                    cfg.AddProfiles(typeof(AutoMapperConfig));
                });
            }
            public static void Reset() => Mapper.Reset();
        }
}
