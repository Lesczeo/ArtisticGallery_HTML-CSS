import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListaDeAtalhos from './components/ListaDeAtalhos/ListaDeAtalhos';
// import PainelConteudo from './components/PainelConteudo/PainelConteudo';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Gallery from './components/Galeria/Gallery';
import Entrada from './components/Entrada/Entrada';

// Funções miscelânias:
function RoutesPainelConteudo(){
  return (
    <Routes>
      {/* Com o 'path="*"', o Route sobrepõe qualquer rota inexistente, e faz "/" o padrão */}
      {/* A propriedade 'replace' faz o histórico se manter limpo */}
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path='/' element={<Entrada />} />
      <Route path='/galeria' element={<Gallery />} />
    </Routes>
  )
}
function VoltarTopo() {
  window.scrollTo({top: 0, behavior: 'smooth'}); // Chrome
  document.body.scrollTo({top: 0, behavior: 'smooth'}); // Safari(?)
}

const root = ReactDOM.createRoot(document.getElementById('rootHome'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ListaDeAtalhos />
      <div id="PainelConteudo">
        <RoutesPainelConteudo />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function to log results
// (for example: reportWebVitals(console.log)) or send to an analytics endpoint.
// Learn more: https://bit.ly/CRA-vitals

export default VoltarTopo;