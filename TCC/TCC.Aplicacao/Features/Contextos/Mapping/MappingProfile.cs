using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TCC.Aplicacao.Features.Arquivos.Command;
using TCC.Aplicacao.Features.Arquivos.ViewModel;
using TCC.Aplicacao.Features.Contextos.Command;
using TCC.Aplicacao.Features.Contextos.ViewModel;
using TCC.Dominio.Features.Arquivos;
using TCC.Dominio.Features.Contextos;

namespace TCC.Aplicacao.Features.Contextos.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<AddContextoCommand, Contexto>(); 

            CreateMap<Contexto, ContextoViewModel>()
                .ForMember(e => e.IdsArquivo, mc => mc.MapFrom(em => em.arquivos.Select(e => e.Id).ToArray()));

            CreateMap<UpdateContextoCommand, Contexto>();
        }

    }
}
