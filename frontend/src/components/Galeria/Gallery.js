import './Gallery.css';
import NavFiltro from "./Filtro/Filtro.js";
import FtrInfo from "./FooterInfo/FooterInfo.js";
import * as CA from "./CartaoArte/CartaoArteExmpls.js";
import BotaoTopo from '../MOB_BotaoTopo/BotaoTopo.js';

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
        <FtrInfo/>
    </main>
  );
}

export default Gallery;