import './Gallery.css';
import NavFiltro from "./Filtro/Filtro.js";
import BotaoTopo from '../MOB_BotaoTopo/BotaoTopo.js';
import InfoDev from "../InfoDev/InfoDev.js";
import * as CA from './CartaoArte/CartaoArteExmpls'

function Gallery() {
  return (
    <main id="mainGallery">
        <NavFiltro/>
        <div id="caixa_CartoesArte">
          <CA.WireframeExmpl/>
          <CA.TESTINGExmpl/>
          <CA.PaintingExmpl/>
          <CA.HorseExmpl/>
          <CA.EasterEggExmpl/>
          <CA.CatExmpl/>
          {/*<CA.ERRORExmpl/>*/}
        </div>
        <BotaoTopo/>
        <footer id="ultimaInfo"><InfoDev/></footer>
    </main>
  );
}

export default Gallery;