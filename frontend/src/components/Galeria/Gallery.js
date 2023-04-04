import './Gallery.css';
import NavFiltro from "./Filtro/Filtro.js";
import BotaoTopo from '../MOB_BotaoTopo/BotaoTopo.js';
import InfoDev from "../InfoDev/InfoDev.js";
import * as CA from './CartaoArte/CartaoArteExmpls'

function Gallery() {
  return (
    <main id="mainGallery">
        <NavFiltro/>
        <CA.TodosOsCartoes/>
        <BotaoTopo/>
        <footer id="ultimaInfo"><InfoDev/></footer>
    </main>
  );
}

export default Gallery;