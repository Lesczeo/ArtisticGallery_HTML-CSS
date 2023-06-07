import './BotoesFuncionais.css';
import { VoltarTopo } from '../../../../miscFunc.js';
// React-Router-Dom links:
import { Link } from 'react-router-dom';
// Icones:
import i8ODoor from '../../../img_Icons8/open-door-50.png';
import i8UP2 from '../../../../img/img_Icons8/up-2-50.png';

export function BotaoRetornoInicio() {
    return(
        <Link to='/inicio'>
            <button id="botaoAtalhosEntrada" title="Volte para o entrada!"
            className="botoes botaoAtalhos zoomHover" type="button">
                <img src={i8ODoor} alt=""></img>
                <span>Entrada</span>
            </button>
        </Link>
    );
}

export function BotaoTopo() {
    return(
        <button title="Vá para o topo da página!" onClick={VoltarTopo}
        className="botoes botaoTopo zoomHover" type="button">
            <img src={i8UP2} alt=""></img>        
        </button>
    );
}