import './Entrada.css';
import InformacoesIntro from "./Info1/Info1.js";
import InformacoesFerramentas from "./Info2/Info2.js";
import ListaDeBotoes from "./Botoes/Botoes.js";
import InformacoesSite from './InfoSite/InfoSite.js';

function Entrada() {
  return (
    <main id="mainEntrada">
      <InformacoesIntro/>
      <InformacoesFerramentas/>
      <ListaDeBotoes/>
      <InformacoesSite/>
    </main>
  );
}

export default Entrada;
