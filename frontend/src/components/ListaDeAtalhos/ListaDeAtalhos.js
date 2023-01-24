import React from 'react';
import './ListaDeAtalhos.css';
// React-Router-Dom links:
import { Link, useLocation } from 'react-router-dom';
// Icones:
import i8ODoor from '../../img/img_Icons8/open-door-50.png';
import i8MLobby from '../../img/img_Icons8/mr-blobby-50.png';
import i8Battle from '../../img/img_Icons8/battle-50.png';
import i8TChest from '../../img/img_Icons8/treasure-chest-50.png';
import i8UP2 from '../../img/img_Icons8/up-2-50.png';
import voltarTopo from '../../index.js'

function ListaDeAtalhos() {
  const location = useLocation()

  return(
    <div id="caixa_ListaDeAtalhos">
      {/* Botão que traz o usuário à entrada. Só aparece quando o PainelConteudo mostrar a galeria: */}
      {location.pathname !=="/" && <Link to='/'>
        <button id="botaoAtalhosEntrada" className="botaoAtalhos zoomHover" title="Volte para a entrada!" type="button">
          <img src={i8ODoor} alt=""></img>
          <span>Entrada</span>
        </button>
      </Link>}
      {/*Uma coluna que irá fazer o display de algumas temáticas escolhidas para filtrar os desenhos: */}
        <div id="listaDeAtalhos">
          <Link to='/galeria'>
            <button title="Artes inspirados em animações!" className="botaoAtalhos zoomHover customVisitedButton" type="button">
              <img src={i8MLobby} alt=""></img>
              <span>Cartoons</span>  
            </button>
          </Link>
          <Link to='/galeria'>
            <button title="Artes inspiradas na idade média!" className="botaoAtalhos zoomHover customVisitedButton" type="button">
              <img src={i8Battle} alt=""></img>
              <span>Medievais</span>
            </button>
          </Link>
          <Link to='/galeria'>
            <button title="Algumas outras artes .." className="botaoAtalhos zoomHover customVisitedButton" type="button">
              <img src={i8TChest} alt=""></img>
              <span>Outros</span> 
            </button>
          </Link>
        </div>
      {/* Botão que traz o usuário ao topo da página: */}
      <button title="Volte para o Topo!" className="botaoTopo zoomHover" onClick={voltarTopo} type="button">
        <img src={i8UP2} alt=""></img>        
      </button>
    </div>
  );
}
export default ListaDeAtalhos;