import './InfoFerramentas.css';
import { arrayFerr } from './FerramentasData.js';

export default function InfoFerramentas() {
    /* 
        Para informar as ferramentas, é preciso listá-las. E com um array
        dessas ferramentas, é possível iterar cada ferramenta, simplificando
        escrita e alterações futuras, o que otimiza o código:
    */
    const listaFerramentas = arrayFerr.map( (tool) =>
        <div className="descFerramenta" key={tool.id}>
            <div type="button"className="box_ImgFerramenta zoomHover"
            title="Clique para mais informações sobre essa ferramenta">
                <a href={tool.srcHref} target="_blank" rel="noreferrer">
                    <img src={tool.srcImg} alt={tool.srcImgAlt}></img>
                </a>
            </div>
            <b>{tool.srcName}</b>
            <p>{tool.srcDesc}</p>
        </div> )

    return(
        <section id="info2">
            <div className="box_SectionTitulos">
                <div className="sectionTitulos">
                    <b>Ferramentas que uso</b>
                </div>
            </div>
            <div className="box_DescFerramenta">
                {listaFerramentas}
            </div>

        </section>
    );
}