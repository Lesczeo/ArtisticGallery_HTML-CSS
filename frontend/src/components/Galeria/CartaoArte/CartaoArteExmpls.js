import './CartaoArteExmpls.css';
import Decal02 from '../../../img/Wireframe002.png';
import DecalTEST from '../../Entrada/Info1/Banner001.png';
// "../../../img/OOPS_No_Valid_Image_V001.png"

function WireframeExmpl() {
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src={Decal02} className="preview_cartaoArte" alt="imagem de uma obra de arte"></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="tituloSecao">
                    <b>Super Drawing Example</b>
                </div>
                <p>"Esta imagem É de minha autoria. Ela representa o wireframe dessa página! Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
                <a href="#preview_cartaoArte" className="zoomHover preview_MResolucao">Maior Resolução</a>
            </div>
        </section>
    );
}

function PaintingExmpl() {
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src="https://thisartworkdoesnotexist.com/" className="preview_cartaoArte" alt="imagem de uma obra de arte"></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="tituloSecao">
                    <b>Super Drawing Example</b>
                </div>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
                <a href="#thisartworkdoesnotexist.com/" className="zoomHover preview_MResolucao">Maior Resolução</a>
            </div>
        </section>
    );
}

function HorseExmpl() {
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src="https://thishorsedoesnotexist.com/" className="preview_cartaoArte" alt="imagem de uma obra de arte"></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="tituloSecao">
                    <b>Super Drawing Example</b>
                </div>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
                <a href="#preview_cartaoArte" className="zoomHover preview_MResolucao">Maior Resolução</a>
            </div>
        </section>
    );
}

function EasterEggExmpl() {
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src="https://upload.wikimedia.org/wikipedia/en/5/5e/I_have_a_special_plan.jpg" className="preview_cartaoArte" alt="imagem de uma obra de arte"></img> {/* Easter Egg IHASPFTW */}
            </div>
            <div className="descricao_cartaoArte">
                <div className="tituloSecao">
                    <b>Super Drawing Example</b>
                </div>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
                <a href="#preview_cartaoArte" className="zoomHover preview_MResolucao">Maior Resolução</a>
            </div>
        </section>
    );
}

function CatExmpl() {
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src="https://thiscatdoesnotexist.com/" className="preview_cartaoArte" alt="imagem de uma obra de arte"></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="tituloSecao">
                    <b>Super Drawing Example</b>
                </div>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
                <a href="#preview_cartaoArte" className="zoomHover preview_MResolucao">Maior Resolução</a>
            </div>
        </section>
    );
}

function TESTINGExmpl() {
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src={DecalTEST} className="preview_cartaoArte" alt="imagem de uma obra de arte"></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="tituloSecao">
                    <b>Super Drawing Example</b>
                </div>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
                <a href="#preview_cartaoArte" className="zoomHover preview_MResolucao">Maior Resolução</a>
            </div>
        </section>
    );
}

export {WireframeExmpl,PaintingExmpl,HorseExmpl,EasterEggExmpl,CatExmpl,TESTINGExmpl};