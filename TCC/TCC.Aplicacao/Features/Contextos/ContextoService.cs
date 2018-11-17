using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using TCC.Aplicacao.Features.Contextos.Command;
using TCC.Dominio.Features.Contextos;
using TCC.Dominio.Features.Textos;

namespace TCC.Aplicacao.Features.Contextos
{
    public class ContextoService : IContextoService
    {
        IContextoRepository _contextoRepository;
        ITextoRepository _textoRepository;

        public ContextoService(IContextoRepository contextoRepository, ITextoRepository textoRepository)
        {
            _contextoRepository = contextoRepository;
            _textoRepository = textoRepository;
        }
        public long Add(AddContextoCommand arquivo)
        {
            var _produto = Mapper.Map<AddContextoCommand, Contexto>(arquivo);
            var novoProduto = _contextoRepository.Add(_produto);
            _textoRepository.ContextoAdd(arquivo.IdTexto, novoProduto);


            return novoProduto.Id;
        }

        public bool Delete(DeleteContextoCommand arquivo)
        {
            var isRemovedAll = true;
            foreach (var arquivoId in arquivo.Ids)
            {
                var isRemoved = _contextoRepository.Delete(arquivoId);

                isRemovedAll = isRemoved ? isRemovedAll : false;
            }
            return isRemovedAll;
        }

        public IQueryable<Contexto> GetAll() => _contextoRepository.GetAll();

        public Contexto GetById(long id) => _contextoRepository.GetById(id);

        public bool Update(UpdateContextoCommand contexto)
        {
            var _produto = Mapper.Map<UpdateContextoCommand, Contexto>(contexto);
            return _contextoRepository.Update(_produto);
        }
    }
}