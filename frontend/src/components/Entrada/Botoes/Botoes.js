import './Botoes.css';
// React-Router-Dom links:
import { Link } from 'react-router-dom';
// Icones:
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
          <Link to='/galeria' className="botaoTema botaoAno zoomHover customVisitedButton">
            <img src={i8MLobby} alt=""></img>
          </Link>
          <Link to='/galeria' className="botaoTema botaoAno zoomHover customVisitedButton">
            <img src={i8Battle} alt=""></img>
          </Link>
          <Link to='/galeria' className="botaoTema botaoAno zoomHover customVisitedButton">
            <img src={i8TChest} alt=""></img>
          </Link>
        </div>
        <div className="botoesAnos">
          <Link to='/galeria' className="botaoAno zoomHover customVisitedButton">(-) 2020</Link>
          <Link to='/galeria' className="botaoAno zoomHover customVisitedButton">2021</Link>
          <Link to='/galeria' className="botaoAno zoomHover customVisitedButton">2022</Link>
          <Link to='/galeria' className="botaoAno zoomHover customVisitedButton">2023</Link>
        </div>
      </div>
    </section>
  );
}

export default ListaDeBotoes;