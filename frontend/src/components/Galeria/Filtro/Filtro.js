import './Filtro.css';
import i8ODoor from '../../../img/img_Icons8/open-door-50.png';
import i8MLobby from '../../../img/img_Icons8/mr-blobby-50.png';
import i8Battle from '../../../img/img_Icons8/battle-50.png';
import i8TChest from '../../../img/img_Icons8/treasure-chest-50.png';

function NavFiltro() {
    return(
        <nav id="filtro">
            <div className="navegacao">
                <div type="button" class="botaoFiltroIcon">
                    <a href='index.html' title="Volte para a entrada!">
                        <img src={i8ODoor} alt=""></img>
                    </a>
                </div>
                <div className="tituloSecao">
                    <b>Galeria artística</b>
                </div>
            </div>
            <div className="caixa_Filtros">
                <input type="text" id="pesquisaFiltro" placeholder="Selecione uma data"></input>
                <div className="caixa_botoesFiltro">
                    {/* Uma grid que irá fazer o display dos filtros de acesso à galeria, por ano (e pelos temas/atalhos no mobile): */}
                    <div className="caixa_botoesFiltroAno">
                        <button type="button" className="botaoFiltroAno zoomHover" onClick="location.href='#\(-\) 2019'">(-) 2019</button>
                        <button type="button" className="botaoFiltroAno zoomHover" onClick="location.href='#2020'">2020</button>
                        <button type="button" className="botaoFiltroAno zoomHover" onClick="location.href='#2021'">2021</button>
                        <button type="button" className="botaoFiltroAno zoomHover" onClick="location.href='#2022'">2022</button>
                    </div>
                    <div className="caixa_botoesFiltroTema">
                        <button type="button" className="botaoTema botaoAno zoomHover customVisitedButton" onClick="location.href='gallery.html'">
                            <img src={i8MLobby} alt=""></img>
                        </button>
                        <button type="button" className="botaoTema botaoAno zoomHover customVisitedButton" onClick="location.href='gallery.html'">
                            <img src={i8Battle} alt=""></img>
                        </button>
                        <button type="button" className="botaoTema botaoAno zoomHover customVisitedButton" onClick="location.href='gallery.html'">
                            <img src={i8TChest} alt=""></img>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavFiltro;