using AutoMapper;
using TCC.Aplicacao.Features.Arquivos.Command;
using TCC.Aplicacao.Features.Arquivos.ViewModel;
using TCC.Dominio.Features.Arquivos;

namespace TCC.Aplicacao.Features.Arquivos.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ArquivoAddCommand, Arquivo>(); 

            CreateMap<Arquivo, ArquivoViewModel>();
            
            CreateMap<ArquivoUpdateCommand, Arquivo>();
        }

    }
}
