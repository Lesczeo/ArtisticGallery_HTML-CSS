import './Gallery.css';
import NavFiltro from "./Filtro/Filtro.js";
import * as CA from "./CartaoArte/CartaoArteExmpls.js";
import BotaoTopo from '../MOB_BotaoTopo/BotaoTopo.js';
import InfoDev from "../InfoDev/InfoDev.js";

function Gallery() {
  return (
    <main id="mainGallery">
        <NavFiltro/>
        <div id="caixa_CartoesArte">
          <CA.WireframeExmpl/>
          <CA.TESTINGExmpl/> {/* Testando imagens com dimensões discrepantes */}
          <CA.PaintingExmpl/>
          <CA.HorseExmpl/>
          <CA.EasterEggExmpl/> {/* Easter Egg IHASPFTW */}
          <CA.CatExmpl/>
        </div>
        <BotaoTopo/>
        <footer id="ultimaInfo"><InfoDev/></footer>
    </main>
  );
}

export default Gallery;