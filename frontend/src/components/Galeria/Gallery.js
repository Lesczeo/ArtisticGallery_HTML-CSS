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
          {/* <CA.ERRORExmpl/> */}
          <CA.CartaoArteDummy/>
          <CA.CartaoArteDummy/>
          <CA.CartaoArteDummy/>
          <CA.CartaoArteDummy/>
          <CA.BannerExmpl/>
        </div>
        <BotaoTopo/>
        <footer id="ultimaInfo"><InfoDev/></footer>
    </main>
  );
}

export default Gallery;