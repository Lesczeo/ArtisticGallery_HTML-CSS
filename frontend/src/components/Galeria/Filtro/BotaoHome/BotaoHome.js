import './BotaoHome.css';
// React-Router-Dom links:
import { Link, useLocation } from 'react-router-dom';
import i8ODoor from '../../../img_Icons8/open-door-50.png';

export default function BotaoHome() {
    const location = useLocation();

    return (<>
        {location.pathname !=="/" && <Link to='/'>
            <button className="botoes botaoEntrada" title="Volte para a entrada!" type="button">
                <img src={i8ODoor} alt=""></img>
            </button>
        </Link>}</>
    );
}