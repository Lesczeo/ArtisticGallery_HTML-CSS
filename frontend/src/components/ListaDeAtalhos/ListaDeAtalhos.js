import React, { useState, useEffect } from 'react';
// import React from 'react';
import './ListaDeAtalhos.css';
// Icones:
import Gallery from '../Galeria/Gallery';
import Entrada from '../Entrada/Entrada';
import i8ODoor from '../../img/img_Icons8/open-door-50.png';
import i8MLobby from '../../img/img_Icons8/mr-blobby-50.png';
import i8Battle from '../../img/img_Icons8/battle-50.png';
import i8TChest from '../../img/img_Icons8/treasure-chest-50.png';
import i8UP2 from '../../img/img_Icons8/up-2-50.png';
import voltarTopo from '../../index.js'

function ListaDeAtalhos() {

  return(
    <div id="caixa_ListaDeAtalhos">
        
        {/* Uma coluna que irá fazer o display de algumas temáticas escolhidas para separar os desenhos: */}
        <div id="listaDeAtalhos">
          
          {/* Botão que traz o usuário à entrada (deve aparecer só quando a masterpage ser a Galeria !!!): */}
          <div type="button" id="botaoAtalhosEntrada" className="botaoAtalhos zoomHover" title="Volte para a entrada!">
            <img src={i8ODoor} alt=""></img>
            <span>Entrada</span>
          </div>

          <div type="button" className="botaoAtalhos zoomHover customVisitedButton" title="Artes inspirados em animações!">
            <img src={i8MLobby} alt=""></img>
            <span>Cartoons</span>
          </div>
          <div type="button" className="botaoAtalhos zoomHover customVisitedButton" title="Artes inspiradas na idade média!">
            <img src={i8Battle} alt=""></img>
            <span>Medievais</span>
          </div>
          <div type="button" className="botaoAtalhos zoomHover customVisitedButton" title="Algumas outras artes ..">
            <img src={i8TChest} alt=""></img>
            <span>Outros</span>
          </div>
        </div>

        {/* Botão que traz o usuário ao topo da página: */}
        <div type="button" className="botaoTopo zoomHover" onClick={voltarTopo} title="Volte para o Topo!">
          <img src={i8UP2} alt=""></img>
          {/* <a href="#rootHome" title="Volte para o topo!">
          </a> */}
        </div>
    </div>
  );
}
export default ListaDeAtalhos;