import './ListaDeAtalhos.css';
// Icones:
import i8ODoor from '../../img/img_Icons8/open-door-50.png';
import i8MLobby from '../../img/img_Icons8/mr-blobby-50.png';
import i8Battle from '../../img/img_Icons8/battle-50.png';
import i8TChest from '../../img/img_Icons8/treasure-chest-50.png';
import i8UP2 from '../../img/img_Icons8/up-2-50.png';

function ListaDeAtalhos() {
    return(
    <div id="caixa_ListaDeAtalhos">
        
        {/* Uma coluna que irá fazer o display de algumas temáticas escolhidas para separar os desenhos: */}
        <div id="listaDeAtalhos">
          <div type="button" id="botaoAtalhosEntrada" className="botaoAtalhos zoomHover">
            <a href='index.html' title="Volte para a entrada!">
              <img src={i8ODoor} alt=""></img>
              <span>Entrada</span>
            </a>
          </div>
          <div type="button" className="botaoAtalhos zoomHover customVisitedButton" title="Artes inspirados em animações!">
            <a href="gallery.html">
              <img src={i8MLobby} alt=""></img>
              <span>Cartoons</span>
            </a>
          </div>
          <div type="button" className="botaoAtalhos zoomHover customVisitedButton" title="Artes inspiradas na idade média!">
            <a href="gallery.html">
              <img src={i8Battle} alt=""></img>
              <span>Medievais</span>
            </a>
          </div>
          <div type="button" className="botaoAtalhos zoomHover customVisitedButton" title="Algumas outras artes ..">
            <a href="gallery.html">
              <img src={i8TChest} alt=""></img>
              <span>Outros</span>
            </a>
          </div>
        </div>

        {/* Botão que traz o usuário ao topo da página: */}
        <div type="button" className="botaoTopo zoomHover"  title="Volte para o Topo!">
          <a href="#Masterpage" title="Volte para o topo!">
            <img src={i8UP2} alt=""></img>
          </a>
        </div>
    </div>
    );
}

export default ListaDeAtalhos;