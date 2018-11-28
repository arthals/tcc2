using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;
using TCC.Aplicacao.Features.Textos.Command;
using TCC.Dominio.Features.Textos;

namespace TCC.Aplicacao.Features.Textos
{
    public class Textoservice : ITextoService
    {
        ITextoRepository _textoRepository;

        public Textoservice(ITextoRepository textoRepository)
        {
            _textoRepository = textoRepository;
        }
        public long Add(AddTextoCommand arquivo)
        {
            var _produto = Mapper.Map<AddTextoCommand, Texto>(arquivo);
           
            _produto.Palavras = System.Net.WebUtility.HtmlDecode(_produto.Palavras);
            
            var novoProduto = _textoRepository.Add(_produto);

            return novoProduto.Id;
        }

        public bool Delete(DeleteTextoCommand arquivo)
        {
            var isRemovedAll = true;
            foreach (var arquivoId in arquivo.Ids)
            {
                var isRemoved = _textoRepository.Delete(arquivoId);

                isRemovedAll = isRemoved ? isRemovedAll : false;
            }
            return isRemovedAll;
        }

        public IQueryable<Texto> GetAll() => _textoRepository.GetAll();

        public Texto GetById(long id) => _textoRepository.GetById(id);

        public bool Update(UpdateTextoCommand texto)
        {
            var _produto = Mapper.Map<UpdateTextoCommand, Texto>(texto);
            return _textoRepository.Update(_produto);
        }
    }
}
