import './AtalhosTipos.css';
// React-Router-Dom links:
import { Link } from 'react-router-dom';

export function AtalhosTemas({temas}) {
    const listaBotoesTema = temas.map((tema) =>
        <Link className="botoes botaoTema zoomHover customVisitedButton"
        to='/galeria' key={tema.key}>
            <img src={tema.cont} alt=""></img>
        </Link>)

    return (<div className="botoesTemas">
                {listaBotoesTema}
            </div>);
}

export function AtalhosAnos({anos}) {
    const listaBotoesAno = anos.map((ano) =>
        <Link className="botoes botaoAno zoomHover customVisitedButton"
        to='/galeria' key={ano.key}>
            {ano.cont}
        </Link>)

    return (<div className="botoesAnos">
                {listaBotoesAno}
            </div>);
}