import './Gallery.css';
import NavFiltro from "./Filtro/Filtro.js";
import BotaoTopo from '../CMisc/MOB_BotaoTopo/BotaoTopo.js';
import InfoDev from "../CMisc/InfoDev/InfoDev.js";
import TodosOsCartoes from './CartaoArte/CartaoArte.js'

function Gallery() {
  return (
    <main id="mainGallery">
        <NavFiltro/>
        <TodosOsCartoes/>
        <BotaoTopo/>
        <footer id="ultimaInfo"><InfoDev/></footer>
    </main>
  );
}

export default Gallery;