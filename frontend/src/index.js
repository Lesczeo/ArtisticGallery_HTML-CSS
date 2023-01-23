import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListaDeAtalhos from './components/ListaDeAtalhos/ListaDeAtalhos';
import Gallery from './components/Galeria/Gallery';
import Entrada from './components/Entrada/Entrada';

function VoltarTopo() {
  window.scrollTo({top: 0, behavior: 'smooth'}); // Chrome
  document.body.scrollTo({top: 0, behavior: 'smooth'}); // Safari(?)
}

const root = ReactDOM.createRoot(document.getElementById('rootHome'));
root.render(
  <React.StrictMode>
    <ListaDeAtalhos/>
    <div id="Conteudo">
      <Gallery/>
      {/*<Entrada/>*/}
      </div> {/* Conteudo deve ser o BrowserRouter */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function to log results
// (for example: reportWebVitals(console.log)) or send to an analytics endpoint.
// Learn more: https://bit.ly/CRA-vitals

export default VoltarTopo;