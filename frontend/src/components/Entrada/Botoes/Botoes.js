import './Botoes.css';
import i8MLobby from '../../../img/img_Icons8/mr-blobby-50.png';
import i8Battle from '../../../img/img_Icons8/battle-50.png';
import i8TChest from '../../../img/img_Icons8/treasure-chest-50.png';

function ListaDeBotoes() {
    return(
        <section id="botoes">
          <div className="descricao_Secao">
            <div className="tituloSecao">
              <b>Galeria por filtros!</b>
            </div>
          </div>
          <div className="caixa_botoes">
            {/* Uma grid que irá fazer o display dos filtros de acesso à galeria, por ano (e pelos temas/atalhos no mobile): */}
            <div className="botoesTemas">
              <button type="button" className="botaoTema botaoAno zoomHover customVisitedButton">
                <img src={i8MLobby} alt=""></img>
              </button>
              <button type="button" className="botaoTema botaoAno zoomHover customVisitedButton">
                <img src={i8Battle} alt=""></img>
              </button>
              <button type="button" className="botaoTema botaoAno zoomHover customVisitedButton">
                <img src={i8TChest} alt=""></img>
              </button>
            </div>
            <div className="botoesAnos">
              <button type="button" className="botaoAno zoomHover customVisitedButton">(-) 2019</button>
              <button type="button" className="botaoAno zoomHover customVisitedButton">2020</button>
              <button type="button" className="botaoAno zoomHover customVisitedButton">2021</button>
              <button type="button" className="botaoAno zoomHover customVisitedButton">2022</button>
            </div>
          </div>
        </section>
    );
}

export default ListaDeBotoes;