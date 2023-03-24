import './Filtro.css';
// React-Router-Dom links:
import { Link, useLocation } from 'react-router-dom';
// Icones:
import i8ODoor from '../../../img/img_Icons8/open-door-50.png';
import i8MLobby from '../../../img/img_Icons8/mr-blobby-50.png';
import i8Battle from '../../../img/img_Icons8/battle-50.png';
import i8Sketch from '../../../img/img_Icons8/sketch-50.png';
import i8TChest from '../../../img/img_Icons8/treasure-chest-50.png';

function NavFiltro() {
    const location = useLocation()

    return(
        <nav id="filtro">
            <div className="navegacao">
                {/* Botão que traz o usuário à entrada. Só aparece quando o PainelConteudo mostrar a galeria!: */}
                {location.pathname !=="/" && <Link to='/'>
                    <button className="botoes botaoEntrada" title="Volte para a entrada!" type="button">
                        <img src={i8ODoor} alt=""></img>
                    </button>
                </Link>}
                <div className="tituloSecao">
                    <b>Galeria artística</b>
                </div>
            </div>
            <div className="caixa_Filtros">
                <div className="caixa_botoesFiltro">
                    {/* Uma grid que irá fazer o display dos filtros de acesso à galeria, por ano (e pelos temas/atalhos no mobile): */}
                    <div className="caixa_botoesFiltroTema">
                        <button className="botoes botaoTema botaoAno zoomHover customVisitedButton" type="button">
                            <img src={i8MLobby} alt=""></img>
                        </button>
                        <button className="botoes botaoTema botaoAno zoomHover customVisitedButton" type="button">
                            <img src={i8Battle} alt=""></img>
                        </button>
                        <button className="botoes botaoTema botaoAno zoomHover customVisitedButton" type="button">
                            <img src={i8Sketch} alt=""></img>
                        </button>
                        <button className="botoes botaoTema botaoAno zoomHover customVisitedButton" type="button">
                            <img src={i8TChest} alt=""></img>
                        </button>
                    </div>
                    <div className="caixa_botoesFiltroAno">
                        <button className="botoes botaoFiltroAno zoomHover" type="button">(-) 2020</button>
                        <button className="botoes botaoFiltroAno zoomHover" type="button">2021</button>
                        <button className="botoes botaoFiltroAno zoomHover" type="button">2022</button>
                        <button className="botoes botaoFiltroAno zoomHover" type="button">2023</button>
                    </div>
                </div>
                <input type="text" id="pesquisaFiltro" placeholder="Selecione uma data"></input>
            </div>
        </nav>
    );
}

export default NavFiltro;