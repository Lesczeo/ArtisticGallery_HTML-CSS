import './Entrada.css';
import InfoIntro from "./InfoIntro/InfoIntro.js";
import InfoFerramentas from "./InfoFerramentas/InfoFerramentas.js";
import AtalhosRapidos from "./AtalhosRapidos/AtalhosRapidos.js";
import InfoFinal from './InfoFinal/InfoFinal.js';
import BotaoTopo from '../CMisc/MOB_BotaoTopo/BotaoTopo';
function Entrada() {
  return (
    <main id="mainEntrada">
      <InfoIntro/>
      <AtalhosRapidos/>
      <InfoFerramentas/>
      <BotaoTopo/>
      <InfoFinal/>
    </main>
  );
}

export default Entrada;
