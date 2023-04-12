import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AtalhosLateral from './components/CMisc/AtalhosLateral/AtalhosLateral.js';
import Gallery from './components/Galeria/Gallery';
import Entrada from './components/Entrada/Entrada';

// A função abaixo determina rotas com componentes (react-router):
function RoutesPainelConteudo(){
  return (
    <div id="PainelConteudo">
      <Routes>
        {/* Com o 'path="*"', o Route sobrepõe qualquer rota inexistente, e faz
        '/' o padrão. A propriedade "replace" faz o histórico se manter limpo */}
        <Route path="*" element={<Navigate to="/inicio" replace />} />
        <Route path='/inicio' element={<Entrada />} />
        <Route path='/galeria' element={<Gallery />} />
      </Routes>
    </div>
  )
}

// Renderização do site com o HTML em '/public':
const root = ReactDOM.createRoot(document.getElementById('rootHome'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <AtalhosLateral />
      <RoutesPainelConteudo />
    </BrowserRouter>
  // </React.StrictMode>
);

/* If you want to start measuring performance in your app, pass a function to log results
(for example: reportWebVitals(console.log)) or send to an analytics endpoint.
Learn more: https://bit.ly/CRA-vitals */