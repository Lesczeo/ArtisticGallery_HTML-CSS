import React from 'react';
import './AtalhosLateral.css';
import { arrayTemas } from './AtalhosData.js';
import * as BF from './BotoesFuncionais/BotoesFuncionais.js'
// Complementos react-router-dom:
import {  Link, useLocation } from 'react-router-dom';

function AtalhosLateral() {
  /*
    Se funcões equivalentes forem alteradas aqui,
    não se esqueça de fazer o mesmo no FILTRO
    DA GALERIA e ATALHOS RÁPIDOS DE ENTRADA!
  */
  const location = useLocation()
  const listaDeTemas = arrayTemas.map( (tema) =>
    <Link to={tema.srcHref} key={tema.id}>
      <button title={tema.srcTitle} type="button"
      className="botoes botaoAtalhos zoomHover customVisitedButton">
          <img src={tema.srcImg} alt=""></img>
          <span>{tema.srcName}</span>
      </button>
    </Link>
  )

  return(
    <div id="listaDeAtalhos">
      <div id="stickyBox">
        {/*
          Botão que traz o usuário à entrada. Só aparece
          quando o endereço é a galeria dos cartões arte:
        */
        location.pathname === "/galeria" && <BF.BotaoRetornoInicio/> }
        <div id="listaBotoesAtalhos">
          {listaDeTemas}
        </div>
        <BF.BotaoTopo/>
      </div>
    </div>
  );
}
export default AtalhosLateral;