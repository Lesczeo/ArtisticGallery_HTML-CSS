import './CartaoArteExmpls.css';
import Decal02 from '../../../img/Wireframe002.png';
import DecalTEST from '../../Entrada/Info1/Banner002.png';
import DecalFail from './OOPS_No_Valid_Image_V001.png';

/*const meusDesenhos =[{
imgsrc:DecalTEST,
genDesc:{
    namesrc:"Super Drawing Example",
    descsrc:"Esta imagem É de minha autoria. Ela representa o wireframe dessa página! Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho",
    toolsrc:"MSPaint, Blender3D e Desenho analógico",
    daysrc:"45/28/6235",
}},{
imgsrc:Decal02,
genDesc:{
    namesrc:"Mega Drawing Other Example",
    descsrc:"Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho",
    toolsrc:"MSPaint",
    daysrc:"72/32/5145",
}}]*/

function TESTINGExmpl() {
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src={DecalTEST} className="preview_cartaoArte"
                onError={(erro)=>{ErroAoObterDesenho(erro)}} alt=""></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="tituloSecao">
                    <b>Super Drawing Example</b>
                </div>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <a href={DecalTEST} className="zoomHover preview_MResolucao">Maior Resolução</a>
                <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
            </div>
        </section>
    );
}

function WireframeExmpl() {
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src={Decal02} className="preview_cartaoArte"
                onError={(erro)=>{ErroAoObterDesenho(erro)}} alt=""></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="tituloSecao">
                    <b>Super Drawing Example</b>
                </div>
                <p>"Esta imagem É de minha autoria. Ela representa o wireframe dessa página! Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <a href={Decal02} className="zoomHover preview_MResolucao">Maior Resolução</a>
                <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
            </div>
        </section>
    );
}

function PaintingExmpl() {  
    const srcImg = "https://thisartworkdoesnotexist.com/";  
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src={srcImg} className="preview_cartaoArte"
                onError={(erro)=>{ErroAoObterDesenho(erro)}} alt="">
                </img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="tituloSecao">
                    <b>Super Drawing Example</b>
                </div>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <a href={srcImg} className="zoomHover preview_MResolucao" target="_blank" rel="noreferrer">Maior Resolução</a>
                <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
            </div>
        </section>
    );
}

function HorseExmpl() {
    const srcImg = "https://thishorsedoesnotexist.com/";
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src={srcImg} className="preview_cartaoArte"
                onError={(erro)=>{ErroAoObterDesenho(erro)}} alt=""></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="tituloSecao">
                    <b>Super Drawing Example</b>
                </div>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <a href={srcImg} className="zoomHover preview_MResolucao" target="_blank" rel="noreferrer">Maior Resolução</a>
                <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
            </div>
        </section>
    );
}

function EasterEggExmpl() {
    const srcImg = "https://upload.wikimedia.org/wikipedia/en/5/5e/I_have_a_special_plan.jpg"
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src={srcImg} className="preview_cartaoArte"
                onError={(erro)=>{ErroAoObterDesenho(erro)}} alt=""></img> {/* Easter Egg IHASPFTW */}
            </div>
            <div className="descricao_cartaoArte">
                <div className="tituloSecao">
                    <b>Super Drawing Example</b>
                </div>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <a href={srcImg}  className="zoomHover preview_MResolucao" target="_blank" rel="noreferrer">Maior Resolução</a>
                <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
            </div>
        </section>
    );
}

function CatExmpl() {
    const srcImg="https://thiscatdoesnotexist.com/"
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src={srcImg} className="preview_cartaoArte"
                onError={(erro)=>{ErroAoObterDesenho(erro)}} alt=""></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="tituloSecao">
                    <b>Super Drawing Example</b>
                </div>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <a href={srcImg} className="zoomHover preview_MResolucao" target="_blank" rel="noreferrer">Maior Resolução</a>
                <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
            </div>
        </section>
    );
}

function ERRORExmpl() {
    const srcImg = "http://I_have_a_dummy_example_for_this_world.2023"
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src={srcImg} className="preview_cartaoArte"
                onError={(erro)=>{ErroAoObterDesenho(erro)}} alt=""></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="tituloSecao">
                    <b>Super Drawing Example</b>
                </div>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <a href={srcImg}  className="zoomHover preview_MResolucao" target="_blank" rel="noreferrer">Maior Resolução</a>
                <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
            </div>
        </section>
    );
}

export {WireframeExmpl,PaintingExmpl,HorseExmpl,EasterEggExmpl,CatExmpl,TESTINGExmpl,ERRORExmpl};


//FUNÇÕES MISCELÂNIAS:

// Essa função garante que a imagem de erro apareça, se não é possível obter a imagem do desenho:
function ErroAoObterDesenho(evento) {
    console.log(`Não é possível acessar o desenho em "${evento.target.src}"`);
    evento.target.src = DecalFail // troca o link da imagem para o link padrão
    evento.target.title = "Oops! Não encontrei esse desenho.. Será que sua conexão com a internet está ok? Tente mais tarde!"; //+Info
}
