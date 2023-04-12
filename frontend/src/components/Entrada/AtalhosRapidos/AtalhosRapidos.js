// importa a data para usar no display dos botões:
import { DataAtual } from '../../../miscFunc';
// Icones:
import i8MLobby from '../../../img/img_Icons8/mr-blobby-50.png';
import i8Battle from '../../../img/img_Icons8/battle-50.png';
import i8Sketch from '../../../img/img_Icons8/sketch-50.png';
import i8TChest from '../../../img/img_Icons8/treasure-chest-50.png';
// Modelos de tipos de atalho:
import * as AT from './AtalhosTipos/AtalhosTipos.js';

const botoesTemas = [
  {key: 0, cont: i8MLobby},
  {key: 1, cont: i8Battle},
  {key: 2, cont: i8Sketch},
  {key: 3, cont: i8TChest}
]
const botoesAno = [
  {key: 0, cont: DataAtual("ano").toString()},
  {key: 1, cont: (DataAtual("ano")-1).toString()},
  {key: 2, cont: (DataAtual("ano")-2).toString()},
  {key: 3, cont: `(-)${(DataAtual("ano")-3)}`}
]

function AtalhosRapidos() {
  return(
    <section id="atalhosRapidos">
      <div className="box_SectionTitulos">
        <div className="sectionTitulos">
          <b>Galeria por filtros!</b>
        </div>
      </div>
      <div className="botoesAtalhos">
        {/* Uma grid que irá fazer o display dos filtros de acesso à galeria, por ano (e pelos temas/atalhos no mobile): */}
        <AT.AtalhosTemas temas={botoesTemas} />
        <AT.AtalhosAnos anos={botoesAno} />
      </div>
    </section>
  );
}

export default AtalhosRapidos;