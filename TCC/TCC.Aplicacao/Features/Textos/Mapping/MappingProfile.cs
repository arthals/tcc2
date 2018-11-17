using AutoMapper;
using TCC.Aplicacao.Features.Contextos.Command;
using TCC.Aplicacao.Features.Contextos.ViewModel;
using TCC.Aplicacao.Features.Textos.Command;
using TCC.Aplicacao.Features.Textos.ViewModel;
using TCC.Dominio.Features.Contextos;
using TCC.Dominio.Features.Textos;

namespace TCC.Aplicacao.Features.Textos.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<AddTextoCommand, Texto>(); 

            CreateMap<Texto, TextoViewModel>();
            
            CreateMap<UpdateTextoCommand, Texto>();
        }

    }
}
