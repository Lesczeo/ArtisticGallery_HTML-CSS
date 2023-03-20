import React from 'react';
import './ListaDeAtalhos.css';
// React-Router-Dom links:
import { Link, useLocation } from 'react-router-dom';
// Icones:
import i8ODoor from '../../img/img_Icons8/open-door-50.png';
import i8MLobby from '../../img/img_Icons8/mr-blobby-50.png';
import i8Battle from '../../img/img_Icons8/battle-50.png';
import i8Sketch from '../../img/img_Icons8/sketch-50.png';
import i8TChest from '../../img/img_Icons8/treasure-chest-50.png';
import i8UP2 from '../../img/img_Icons8/up-2-50.png';
import voltarTopo from '../../index.js'

function ListaDeAtalhos() {
  const location = useLocation()

  return(

    /* OBS.: Por questões de responsividade, todos os botões nessa parte desaparecerão quando a tela ter menos de 500px de
    largura. Para continuar os atalhos em uma dimensão de tela menor, eles devem aparecer na parte de filtros da galeria.
    SE BOTÕES FOREM ALTERADOS AQUI, NÃO SE ESQUEÇA DE FAZER O MESMO NO COMPONENTE DE FILTRO! (..\Galeria\Filtro\Filtro.js) */

    <div id="listaDeAtalhos"><div id="stickyBox">
      {/* Botão que traz o usuário à entrada. Só aparece quando o PainelConteudo mostrar a galeria: */}
      {location.pathname !=="/" && <Link to='/'>
        <button id="botaoAtalhosEntrada" className="botoes botaoAtalhos zoomHover" title="Volte para a entrada!" type="button">
          <img src={i8ODoor} alt=""></img>
          <span>Entrada</span>
        </button>
      </Link>}
      {/*Uma coluna que irá fazer o display de algumas temáticas escolhidas para filtrar os desenhos: */}
        <div id="listaBotoesAtalhos">
          <Link to='/galeria'>
            <button title="Artes inspirados em animações!" className="botoes botaoAtalhos zoomHover customVisitedButton" type="button">
              <img src={i8MLobby} alt=""></img>
              <span>Cartoons</span>  
            </button>
          </Link>
          <Link to='/galeria'>
            <button title="Artes inspiradas na idade média!" className="botoes botaoAtalhos zoomHover customVisitedButton" type="button">
              <img src={i8Battle} alt=""></img>
              <span>Medievais</span>
            </button>
          </Link>
          <Link to='/galeria'>
            <button title="Desenhos que ficaram só como esboço!" className="botoes botaoAtalhos zoomHover customVisitedButton" type="button">
              <img src={i8Sketch} alt=""></img>
              <span>Esboços</span> 
            </button>
          </Link>
          <Link to='/galeria'>
            <button title="Algumas outras artes .." className="botoes botaoAtalhos zoomHover customVisitedButton" type="button">
              <img src={i8TChest} alt=""></img>
              <span>Outros</span> 
            </button>
          </Link>
        </div>
      {/* Botão que traz o usuário ao topo da página: */}
      <button title="Volte para o Topo!" className="botoes botaoTopo zoomHover" onClick={voltarTopo} type="button">
        <img src={i8UP2} alt=""></img>        
      </button>
    </div></div>
  );
}
export default ListaDeAtalhos;