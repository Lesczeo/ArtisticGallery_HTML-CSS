import './BotaoTopo.css';
import i8UP2 from '../../../img/img_Icons8/up-2-50.png';
function BotaoTopo() {
  return (
    <div type="button" className="botaoTopoMobile"  title="Volte para o Topo!">
        <a className="link_botaoTopoMobile" href="#Masterpage" title="Volte para o topo!">
            <div>Volte para o topo!</div><img src={i8UP2} alt=""></img>
        </a>
    </div>
  );
}

export default BotaoTopo;