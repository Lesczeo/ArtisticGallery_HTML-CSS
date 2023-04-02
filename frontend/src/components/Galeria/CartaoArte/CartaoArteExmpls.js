import './CartaoArteExmpls.css';
import DecalFail from './OOPS_No_Valid_Image_V001.png';
import DCBanner from '../../Entrada/Info1/Banner002.png';
import { imgsURLcArte, arrayCArte } from '../ImgURLdata.js';

function TodosOsCartoes() {

    var finalCArte = [];
    arrayCArte.forEach((cartaoArte)=>{
        const imag = cartaoArte.srcImg;
        const nome = cartaoArte.srcName;
        const diaC = cartaoArte.srcBDay;
        const desc = cartaoArte.srcDesc;
        const ferr = cartaoArte.srcFerr;
        const tema = cartaoArte.srcTema;
        const idCA = cartaoArte.id;

        finalCArte.push(ModeloCartaoArte(imag,nome,diaC,desc,ferr,tema,idCA));
        }
    );
    
    
    // Adicione cards de teste aqui, usando "unshift()" no finalCArte
    // OBS.: Remova assim que terminar de testar!
    /* finalCArte.unshift(BannerExmpl()); */
    

    return (
        <div>
            {finalCArte}
        </div>
    );
}
// Monta somente 1 Cartão Arte. Deve ser child de "TodosOsCartoes" após montar:
function ModeloCartaoArte(srcImg,srcName,srcBDay,srcDesc,srcTools,srcThemes,srcID){
    /*
        Um cartão arte precisa de 1 imagem, 1 nome, 1 data de criação e 1 descrição,
        além de 1 OU MAIS ferramentas, e temáticas.
    */

    /* Conferindo se as props foram definidas corretamente: */
    const date = new Date().toJSON().slice(0, 10); // Pega o dia atual em si
    const vazio = "Sem Dados."
    /*       "o que retornar? façaSeTrue : façaSeFalse" */
    // OBS.: Pode dar erro aqui se houverem valores iguais ao randomizar
    srcID = (srcID? srcID : Math.floor(Math.random() * 1000)+1);
    srcName = (srcName? srcName : vazio);
    srcImg = (srcImg? srcImg : DecalFail);
    srcBDay = (srcBDay? srcBDay : date);
    srcDesc = (srcDesc? srcDesc : vazio);
    // As ferramentas precisam existir, e não serem arrays:
    srcTools = (srcTools? srcTools : vazio);
    srcTools = (Array.isArray(srcTools)? FormataFrase(srcTools) : srcTools);
    // As tematicas precisam existir, e não serem arrays:
    srcThemes = (srcThemes? srcThemes : vazio);
    srcThemes = (Array.isArray(srcThemes)? FormataFrase(srcThemes) : srcThemes);

    return (
        <section className="cartaoArte" key={srcID}>
            <a className="previewCartaoArte zoomImgHover" /*caixa_preview_cartaoArte*/
            href={srcImg}
            title="Clique para ver em maior resolução"
            alt={srcName}
            target="_blank"
            rel="noreferrer">
                <img src={srcImg} className="imagemCartaoArte"
                onError={(erro)=>{ErroAoObterDesenho(erro)}} alt=""></img>
            </a>
            <div className="descricaoCartaoArte">
                <div className="tituloSecao">
                    {srcName}
                </div>
                <p>&#127874; <b>Criado em: </b>{srcBDay}</p>
                <p>{srcDesc}</p>
                <p>&#128296; <b>Ferramentas usadas: </b>{srcTools}</p>
                <p>&#11088; <b>Temas: </b>{srcThemes}</p>
            </div>
        </section>);
}
// Essa função transforma um grupo/array de dados em uma string formatada (montadores de cartão arte):
function FormataFrase(array){
    
    let string = "";
    if (array.length === 0 || array === undefined){ // Se array estiver vazio
        console.log(`erros ao buscar o seguinte array do tipo ${typeof(array)}: "${array}"`);
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
// Essa função garante que a imagem de erro apareça, se não é possível obter a imagem do desenho:
function ErroAoObterDesenho(evento) {
    console.log(`Não é possível acessar o desenho em "${evento.target.src}"`);
    evento.target.src = DecalFail // troca o link da imagem para o link padrão
    evento.target.title = `Oops! Não encontrei esse desenho.. Será que sua conexão com a internet está ok? Tente mais tarde!`;
}

// 3 Funções de codificação teste (não usar ativamente):
function BannerExmpl() {
    const imag = DCBanner;
    const nome = "Artem est de anima (Banner de Entrada)";
    const diaC = "Da-ta-Data";
    const desc = `Esta imagem é de minha autoria. Estou usando-a para exemplificar
    um desenho. Descrição do desenho Descrição do desenho Descrição do desenho
    Descrição do desenho Descrição do desenho`;
    const ferr = "MSPaint e MediBang.";
    const tema = "Outros e Cartoon.";

    return(ModeloCartaoArte(imag,nome,diaC,desc,ferr,tema));
}
function ERRORExmpl() {
    /*
    Este exemplo usa uma imagem que não pode ser requisitada, a fim de demonstrar a função
    "ErroAoObterDesenho()", que age como um placeholder de conteúdo gráfico (DecalFail)

    No longer active website list:
    * https://thishorsedoesnotexist.com/
    * https://thiscatdoesnotexist.com/
    * https://thisartworkdoesnotexist.com/ 
    */

    /*No longer active website*/
    const imag = "https://thisartworkdoesnotexist.com/";
    const nome = "\"A Arte Do Erro\"";
    const diaC = undefined;
    const desc = "\"Esse desenho não devia estar aqui, algo não está certo.. Mas não entre em pânico: Me contate para que eu possa fazer os ajustes!\"";

    return(ModeloCartaoArte(imag,nome,diaC,desc));
}
function CartaoArteDummy() {
    /*
        Optou-se que o Nome, Data e Descrição sejam livres de geração, sendo então
        estática/constante para qualquer chamada. Os outros dados deverão ser gerados aleatoriamente!
    */
    // Imagem (1):
    const imag = imgsURLcArte[Math.floor(Math.random() * imgsURLcArte.length)];
    // Info estática:
    const nome = "Super Drawing Example";
    const diaC = "Da-ta-Data";
    const desc = `Esta imagem pode não ser de minha autoria, e estou usando-a somente para
    exemplificar um desenho. Ela foi escolhida aleatoriamente por arquivos internos da aplicação
    só para você! Não é belo?`;
    // Ferramenta (1ou+):
    const lferr = ["Desenho Analógico","MSPaint","MediBang","Blender"];
    const ferr = AgrupaDadosRandom(lferr);
    // Temática (1ou+):
    const ltema = ["Cartoon","Medievais","Esboços","Outros"];
    const tema = AgrupaDadosRandom(ltema);
    // OBS.: Pode dar erro aqui se houverem valores iguais ao randomizar
    const iden = (Math.floor(Math.random() * 1000)+1);

    return(ModeloCartaoArte(imag,nome,diaC,desc,ferr,tema,iden));
}

export {TodosOsCartoes};

//FUNÇÕES MISCELÂNIAS - Especiais CartaoArteDummy:
// Essa função escolhe um número aleatório (relativo ao tamanho máximo de um array):
function numRandom_RelTamMax(array){ 
    const numero = Math.floor(Math.random() * array.length) + 1;
    return (numero)
}
// Essa função escolhe uma posição aleatória de um array (relativa ao tamanho máximo desse array):
function posRandom_RelTamMax(array){ 
    const posicao = Math.floor(Math.random() * array.length);
    return (posicao)
}
// Essa função pega um número aleatório de itens em um array, e cria um array novo com eles:
function AgrupaDadosRandom(array){
    /*
        Para agrupar, é preciso escolher uma quantidade de itens para agrupar, escolher
        os itens e se atentar à não escolher itens que já foram escolhidas/repetidamente.
    */
    
    var quantiaItems = numRandom_RelTamMax(array); // escolhe quantos itens agrupar
    let posRepetidas = []; // Array para as posicões de itens já escolhidos. (numeros)
    let allItems = []; // Será o agrupamento dos nomes dos itens já escolhidos. (strings)
    let posDoItem = 0; // a posição de um item novo a ser agrupado
    let itemEscolhido = ""; // o item novo a ser agrupado no "AllItems"
    var posAleatoria = posRandom_RelTamMax(array);

    // Esse "for" agirá enquanto o número de itens escolhidos não for satisfeito
    for(let i=0; i < quantiaItems; i++){
        if (i>0) {
            // Se não-é a primeira vez que escolho, algo já foi escolhido antes
            while (posRepetidas.includes(posAleatoria)) {
                posAleatoria = posRandom_RelTamMax(array);
            }
            posDoItem = posAleatoria; // a posição inovadora se torna a posição escolhida
            itemEscolhido = array[posDoItem];
            posRepetidas.push(posDoItem); // guarda a posição como escolhida (Não se repete)
            allItems.push(itemEscolhido);
        } else {
            // Se é a primeira vez, então qualquer item do array pode ser para começar
            posDoItem = posAleatoria;
            itemEscolhido = array[posDoItem];
            posRepetidas.push(posDoItem); // guarda a posição como escolhida (Não se repete)
            allItems.push(itemEscolhido);
        }
    }
    return(allItems) // retorna um array com todos os itens aleatoriamente selecionados
}