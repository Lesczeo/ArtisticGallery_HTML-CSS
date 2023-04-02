import './Gallery.css';
import NavFiltro from "./Filtro/Filtro.js";
import BotaoTopo from '../MOB_BotaoTopo/BotaoTopo.js';
import InfoDev from "../InfoDev/InfoDev.js";
import * as CA from './CartaoArte/CartaoArteExmpls'

/* 

OBS.: Considerar esse input para definir o número de CArte à dividir por página:
<input type="number" id="points" name="points" step="5" min="5" max="50"  value="10"></input>

*/

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