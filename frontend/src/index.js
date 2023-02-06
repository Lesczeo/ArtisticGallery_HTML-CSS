import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListaDeAtalhos from './components/ListaDeAtalhos/ListaDeAtalhos';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Gallery from './components/Galeria/Gallery';
import Entrada from './components/Entrada/Entrada';

// A função abaixo faz a mudança dos componentes do site, simulando rotas e endereços:
function RoutesPainelConteudo(){
  return (
    <div id="PainelConteudo">
      <Routes>
        {/* Com o 'path="*"', o Route sobrepõe qualquer rota inexistente, e faz "/" o padrão */}
        {/* A propriedade 'replace' faz o histórico se manter limpo */}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path='/' element={<Entrada />} />
        <Route path='/galeria' element={<Gallery />} />
      </Routes>
    </div>
  )
}

// Renderização do site com o HTML em '/public':
const root = ReactDOM.createRoot(document.getElementById('rootHome'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ListaDeAtalhos />
      <RoutesPainelConteudo />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function to log results
// (for example: reportWebVitals(console.log)) or send to an analytics endpoint.
// Learn more: https://bit.ly/CRA-vitals

// Funções dos botões de retorno ao topo (usado principalmentes na Lista de atalhos, e no MOBile):
export default function VoltarTopo() {
  window.scrollTo({top: 0, behavior: 'smooth'}); // Chrome
  document.body.scrollTo({top: 0, behavior: 'smooth'}); // Safari(?)
}