import './CartaoArteExmpls.css';
import Decal02 from '../../../img/Wireframe002.png';
import DecalTEST from '../../Entrada/Info1/Banner002.png';
import DecalFail from './OOPS_No_Valid_Image_V001.png';

/*const list = [{
aa : Decal02,
ab : {
    bb : "Mega Drawing Other Example",
    cc : "72/32/5145",
    dd : "Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho",
    ee : ["MSPaint","Blender3D","Desenho analógico"],
    ff : ["Cartoon","Outros"],
}

const a = list[0].aa;
console.log(a);
const b = list[0].ab.bb;
const c = list[0].ab.cc;
const d = list[0].ab.dd;
const e = list[0].ab.ee;
const f = list[0].ab.ff;
}]

const a = desenho.imgsrc
console.log(desenho.imgsrc);
const b = desenho.genDesc.namesrc;
const c = desenho.genDesc.daysrc;
const d = desenho.genDesc.descsrc;
const e = desenho.genDesc.toolsrc;
const f = desenho.genDesc.thmsrc;

meusDesenhos.forEach(() => {})

const meusDesenhos = [{
    imgsrc:Decal02,
    genDesc:{
        namesrc:"Mega Drawing Other Example",
        daysrc:"72/32/5145",
        descsrc:"Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho",
        toolsrc:["MSPaint","Blender"],
        thmsrc:["Outros"]}
    },{
    imgsrc:DecalTEST,
    genDesc:{
        namesrc:"Supe Drawing Example",
        daysrc:"45/28/6235",
        descsrc:"Esta imagem É de minha autoria. Ela representa o wireframe dessa página! Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho",
        toolsrc:["MSPaint","Blender3D","Desenho analógico"],
        thmsrc:["Outros","Cartoon"]}
    }]*/

function MontaCartao({image,name,day,description,tool,theme}){
    const stringFerramentas = FormataFrase(tool);
    const stringTemas = FormataFrase(theme);
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src={image} className="preview_cartaoArte"
                onError={(erro)=>{ErroAoObterDesenho(erro)}} alt=""></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="zoomHover tituloSecao">
                    <a href={image} className="preview_MResolucao customVisitedButton" title="Clique para ver em maior resolução" target="_blank" rel="noreferrer">
                        {name}
                    </a>
                </div>
                <p><b>&#127874; Criado em: </b>{day}</p>
                <p>"{description}"</p>
                <p><b>&#128296; Ferramentas usadas: </b>{stringFerramentas}</p>
                <p><b>&#11088; Temas: </b>{stringTemas}</p>
            </div>
        </section>
    )
}

function WireframeExmpl() {
    const srcImg = Decal02; 
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src={srcImg} className="preview_cartaoArte"
                onError={(erro)=>{ErroAoObterDesenho(erro)}} alt=""></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="zoomHover tituloSecao">
                    <a href={srcImg} className="preview_MResolucao customVisitedButton" title="Clique para ver em maior resolução" target="_blank" rel="noreferrer">
                        Super Drawing Example
                    </a>
                </div>
                <p>&#127874; <b>Criado em: </b>Da/ta/Data</p>
                <p>"Esta imagem é de minha autoria. Ela representa um desenho nessa página! Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <p>&#128296; <b>Ferramentas usadas: </b>MSPaint, MediBang e Blender</p>
                <p>&#11088; <b>Temas: </b>Cartoon, Outros</p>
            </div>
        </section>
    );
}

function TESTINGExmpl() {
    const srcImg = DecalTEST;
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src={srcImg} className="preview_cartaoArte"
                onError={(erro)=>{ErroAoObterDesenho(erro)}} alt=""></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="zoomHover tituloSecao">
                    <a href={srcImg} className="preview_MResolucao customVisitedButton" title="Clique para ver em maior resolução" target="_blank" rel="noreferrer">
                        Artem est de anima (Banner de Entrada)
                    </a>
                </div>
                <p>&#127874; <b>Criado em: </b>Da/ta/Data</p>
                <p>"Esta imagem é de minha autoria. Estou usando-a para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <p>&#128296; <b>Ferramentas usadas: </b>MSPaint, Blender e MediBang</p>
                <p>&#11088; <b>Temas: </b>Outros, Cartoon</p>
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
                onError={(erro)=>{ErroAoObterDesenho(erro)}} alt=""></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="zoomHover tituloSecao">
                    <a href={srcImg} className="preview_MResolucao customVisitedButton" title="Clique para ver em maior resolução" target="_blank" rel="noreferrer">
                        Le frisson des ordinateurs
                    </a>
                </div>
                <p>&#127874; <b>Criado em: </b>Da/ta/Data</p>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <p>&#128296; <b>Ferramentas usadas: </b>MSPaint, MediBang e Blender</p>
                <p>&#11088; <b>Temas: </b>Cartoon, Outros</p>
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
                <div className="zoomHover tituloSecao">
                    <a href={srcImg} className="preview_MResolucao customVisitedButton" title="Clique para ver em maior resolução" target="_blank" rel="noreferrer">
                        Silly looking cow
                    </a>
                </div>
                <p>&#127874; <b>Criado em: </b>Da/ta/Data</p>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <p>&#128296; <b>Ferramentas usadas: </b>MSPaint, MediBang e Blender</p>
                <p>&#11088; <b>Temas: </b>Cartoon, Outros</p>
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
                <div className="zoomHover tituloSecao">
                    <a href={srcImg} className="preview_MResolucao customVisitedButton" title="Clique para ver em maior resolução" target="_blank" rel="noreferrer">
                        Yzvirlysogonious Clown
                    </a>
                </div>
                <p>&#127874; <b>Criado em: </b>Da/ta/Data</p>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <p>&#128296; <b>Ferramentas usadas :</b>MSPaint, MediBang e Blender</p>
                <p>&#11088; <b>Temas: </b>Outros, Cartoon</p>
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
                <div className="zoomHover tituloSecao">
                    <a href={srcImg} className="preview_MResolucao customVisitedButton" title="Clique para ver em maior resolução" target="_blank" rel="noreferrer">
                        My cat doesn't stop zooming at night and i don't know why
                    </a>
                </div>
                <p>&#127874; <b>Criado em: </b>Da/ta/Data</p>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <p>&#128296; <b>Ferramentas usadas: </b>MSPaint, MediBang e Blender</p>
                <p>&#11088; <b>Temas: </b>Cartoon, Outros</p>
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
                <div className="zoomHover tituloSecao">
                    <a href={srcImg} className="preview_MResolucao customVisitedButton" title="Clique para ver em maior resolução" target="_blank" rel="noreferrer">
                        Super Drawing Example
                    </a>
                </div>
                <p>&#127874; <b>Criado em: </b>Da/ta/Data</p>
                <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <p>&#128296; <b>Ferramentas usadas: </b>MSPaint, MediBang e Blender</p>
                <p>&#11088; <b>Temas: </b>Cartoon, Outros</p>
            </div>
        </section>
    );
}

export {MontaCartao,WireframeExmpl,PaintingExmpl,HorseExmpl,EasterEggExmpl,CatExmpl,TESTINGExmpl,ERRORExmpl};


//FUNÇÕES MISCELÂNIAS:

// Essa função garante que a imagem de erro apareça, se não é possível obter a imagem do desenho:
function ErroAoObterDesenho(evento) {
    console.log(`Não é possível acessar o desenho em "${evento.target.src}"`);
    evento.target.src = DecalFail // troca o link da imagem para o link padrão
    evento.target.title = "Oops! Não encontrei esse desenho.. Será que sua conexão com a internet está ok? Tente mais tarde!"; //+Info
}
// Essa função transforma um grupo/array de dados em uma string formatada:
function FormataFrase(array){
    
    console.log("entrou FormataFrase")
    console.log(array)
    let string = "";
    if (array.length === 0 || array === undefined){ // Se array estiver vazio
        console.log(`erros ao buscar o seguinte array do tipo ${typeof(array)}: ${array}`);
        string = "Sem dados."
    } else if (array.length === 1) { // Se array tiver só 1 elemento
        string = `${array[0]}.`;
    } else if (array.length === 2) { // Se array tiver 2 elementos
        string = `${array[0]} e ${array[1]}.`
    } else {
        array.forEach(el => { // O array tem mais de 1 array
            if (el === array[0]) { // Se o elemento for o primeiro
                string = el
            } else if (el === array[array.length - 1]) { // Se o elemento for o último
                string = string + " e " + el + "."
            } else { // Se o elemento estiver no meio
                string = string + ", " + el
            }
        });
    }
    return(string)
}

