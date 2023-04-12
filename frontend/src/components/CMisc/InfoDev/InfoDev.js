import './InfoDev.css';
import { DataAtual } from '../../../miscFunc';

function InfoDev() {
    return(
        <span>
            Desenvolvido por <a id="lescLinkedInLink" href="https://github.com/Lesczeo" target="_blank" rel="noreferrer">Lucas Etzeo</a> - <i>{DataAtual("Ano")}</i>
        </span>
    );
}

export default InfoDev;