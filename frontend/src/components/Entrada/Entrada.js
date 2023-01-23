import './Entrada.css';
import InformacoesIntro from "./Info1/Info1.js";
import InformacoesFerramentas from "./Info2/Info2.js";
import ListaDeBotoes from "./Botoes/Botoes.js";
import InformacoesSite from './InfoSite/InfoSite.js';
import BotaoTopo from '../MOB_BotaoTopo/BotaoTopo.js';
function Entrada() {
  return (
    <main id="mainEntrada">
      <InformacoesIntro/>
      <ListaDeBotoes/>
      <InformacoesFerramentas/>
      <BotaoTopo/>
      <InformacoesSite/>
    </main>
  );
}

export default Entrada;
