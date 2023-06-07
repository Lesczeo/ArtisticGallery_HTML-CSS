import './Filtro.css';
import BotaoHome from './BotaoHome/BotaoHome.js';
import SelecQuanCA from './Filtros/SelectQCA.js';
import SelecAno from './Filtros/SelecAno';
import SelecPesquisaDet from './Filtros/SelecPesquisaDet.js';
import IniciarPesquisa from './Filtros/IniciarPesquisa';
import ModalPesquisaDet from './Filtros/ModalPesquisaDet/ModalPesquisaDet.js';

function NavFiltro() {
    return(
        <nav id="filtragem">
            <div className="navegacao">
                {/* Botão que só aparece quando o usuário estiver na galeria: */}
                <BotaoHome />
                <div className="sectionTitulos"><b>Galeria artística</b></div>
            </div>
            <div className="botoesFiltro">
                <SelecQuanCA/>
                <SelecAno/>
                <SelecPesquisaDet/>
                <IniciarPesquisa/>
                <ModalPesquisaDet />
            </div>
        </nav>
    );
}

export default NavFiltro;