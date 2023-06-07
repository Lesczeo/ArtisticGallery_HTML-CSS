import './Gallery.css';
import Filtro from "./Filtro/Filtro.js";
import CartoesArte from './CartaoArte/CartaoArte.js';
import BotaoTopo from '../CMisc/MOB_BotaoTopo/BotaoTopo.js';
import InfoDev from "../CMisc/InfoDev/InfoDev.js";

function Gallery() {
  return (
    <main id="mainGallery">
        <Filtro/>
        <section className="cartoesArte">
          <CartoesArte/>
        </section>
        <BotaoTopo/>
        <footer id="ultimaInfo"><InfoDev/></footer>
    </main>
  );
}

export default Gallery;