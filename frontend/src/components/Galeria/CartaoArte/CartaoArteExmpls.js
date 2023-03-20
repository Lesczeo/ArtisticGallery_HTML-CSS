import './CartaoArteExmpls.css';
import DecalFail from './OOPS_No_Valid_Image_V001.png';
import DCBanner from '../../Entrada/Info1/Banner002.png';

// Imagems que serão usadas pelo CartaoArteDummy para exemplificar imagens:
const urlTeste = ["https://upload.wikimedia.org/wikipedia/en/5/5e/I_have_a_special_plan.jpg"];
const otherImgUrls = [
    "https://ia803106.us.archive.org/27/items/WindowsVista.InboxMedium.Photo/Autumn%20Leaves.jpg",
    "https://ia803106.us.archive.org/27/items/WindowsVista.InboxMedium.Photo/Creek.jpg",
    "https://ia903106.us.archive.org/27/items/WindowsVista.InboxMedium.Photo/Desert%20Landscape.jpg",
    "https://ia803106.us.archive.org/27/items/WindowsVista.InboxMedium.Photo/Dock.jpg",
    "https://ia903106.us.archive.org/27/items/WindowsVista.InboxMedium.Photo/Forest%20Flowers.jpg",
    "https://ia803106.us.archive.org/27/items/WindowsVista.InboxMedium.Photo/Frangipani%20Flowers.jpg",
    "https://ia903106.us.archive.org/27/items/WindowsVista.InboxMedium.Photo/Garden.jpg",
    "https://ia803106.us.archive.org/27/items/WindowsVista.InboxMedium.Photo/Green%20Sea%20Turtle.jpg",
    "https://ia803106.us.archive.org/27/items/WindowsVista.InboxMedium.Photo/Humpback%20Whale.jpg",
    "https://ia903106.us.archive.org/27/items/WindowsVista.InboxMedium.Photo/Toco%20Toucan.jpg",
    "https://ia803106.us.archive.org/27/items/WindowsVista.InboxMedium.Photo/Tree.jpg",
    "https://ia803106.us.archive.org/27/items/WindowsVista.InboxMedium.Photo/Waterfall.jpg",
    "https://ia803106.us.archive.org/27/items/WindowsVista.InboxMedium.Photo/Winter%20Leaves.jpg",
    "https://ia801201.us.archive.org/14/items/Chrysanthemum_20160913/Chrysanthemum.jpg",
    "https://ia601201.us.archive.org/14/items/Chrysanthemum_20160913/Hydrangeas.jpg",
    "https://ia601201.us.archive.org/14/items/Chrysanthemum_20160913/Jellyfish.jpg",
    "https://ia601201.us.archive.org/14/items/Chrysanthemum_20160913/Koala.jpg",
    "https://ia801201.us.archive.org/14/items/Chrysanthemum_20160913/Lighthouse.jpg",
    "https://ia801201.us.archive.org/14/items/Chrysanthemum_20160913/Tulips.jpg"
]

function CartaoArteDummy() {
    /*
        Um cartão arte precisa de 1 imagem, 1 nome, 1 data de criação e 1 descrição,
        além de 1 OU MAIS ferramentas, e temáticas.
        Optou-se que o Nome, Data e Descrição sejam livres de geração, sendo então
        estática/constante para qualquer chamada. Os outros dados deverão ser gerados aleatoriamente!
    */

    // Imagem (1):
    const listaImages = urlTeste.concat(otherImgUrls);
    console.log(listaImages);
    const srcImg = listaImages[Math.floor(Math.random() * listaImages.length)];

    // Info estática:
    const srcName = "Super Drawing Example";
    const srcBDay = "Da/ta/Data";
    const srcDesc = `Esta imagem pode não ser de minha autoria, e estou usando-a somente para
    exemplificar um desenho. Ela foi escolhida aleatoriamente por arquivos internos da aplicação
    só para você! Não é belo?`;

    // Ferramenta (1ou+):
    const listaTools = ["Desenho Analógico","MSPaint","MediBang","Blender"];
    const fraseFerrNaoFormatada = AgrupaDados(listaTools);
    const srcTools = FormataFrase(fraseFerrNaoFormatada);

    // Temática (1ou+):
    const listaTemas = ["Cartoon","Medievais","Esboços","Outros"];
    const fraseTemaNaoFormatada = AgrupaDados(listaTemas);
    const srcTemas = FormataFrase(fraseTemaNaoFormatada);

    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <a href={srcImg} alt={srcName} title="Clique para ver em maior resolução"
                    target="_blank" rel="noreferrer">
                    <img src={srcImg} className="preview_cartaoArte"
                    onError={(erro)=>{ErroAoObterDesenho(erro)}} alt=""></img>
                </a>
            </div>
            <div className="descricao_cartaoArte">
                <div className="zoomHover tituloSecao">
                    <a href={srcImg} className="preview_MResolucao customVisitedButton"
                    alt={srcName} title="Clique para ver em maior resolução"
                    target="_blank" rel="noreferrer">
                        {srcName}
                    </a>
                </div>
                <p>&#127874; <b>Criado em: </b>{srcBDay}</p>
                <p>{srcDesc}</p>
                <p>&#128296; <b>Ferramentas usadas: </b>{srcTools}</p>
                <p>&#11088; <b>Temas: </b>{srcTemas}</p>
            </div>
        </section>
    );
}
function BannerExmpl() {
    const srcImg = DCBanner;
    const srcName = "Artem est de anima (Banner de Entrada)";
    const srcBDay = "Da/ta/Data";
    const srcDesc = `Esta imagem é de minha autoria. Estou usando-a para exemplificar
    um desenho. Descrição do desenho Descrição do desenho Descrição do desenho
    Descrição do desenho Descrição do desenho`;
    const srcTools = "MSPaint e MediBang.";
    const srcTemas = "Outros e Cartoon.";

    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <a href={srcImg} alt={srcName} title="Clique para ver em maior resolução"
                    target="_blank" rel="noreferrer">
                    <img src={srcImg} className="preview_cartaoArte"
                    onError={(erro)=>{ErroAoObterDesenho(erro)}} alt=""></img>
                </a>
            </div>
            <div className="descricao_cartaoArte">
                <div className="zoomHover tituloSecao">
                    <a href={srcImg} className="preview_MResolucao customVisitedButton"
                    alt={srcName} title="Clique para ver em maior resolução"
                    target="_blank" rel="noreferrer">
                        {srcName}
                    </a>
                </div>
                <p>&#127874; <b>Criado em: {srcBDay}</b></p>
                <p>{srcDesc}</p>
                <p>&#128296; <b>Ferramentas usadas: {srcTools}</b></p>
                <p>&#11088; <b>Temas: {srcTemas}</b></p>
            </div>
        </section>
    );
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

    /*No longer active website*/ const srcImg = "https://thisartworkdoesnotexist.com/" ;
    const srcName = "\"A Arte Do Erro\"";
    return(
        <section className="cartaoArte">
            <div className="caixa_Imagem_cartaoArte">
                <img src={srcImg} className="preview_cartaoArte"
                onError={(erro)=>{ErroAoObterDesenho(erro)}} alt=""></img>
            </div>
            <div className="descricao_cartaoArte">
                <div className="zoomHover tituloSecao">
                    <a href={srcImg} className="preview_MResolucao customVisitedButton"
                    alt={srcName} title="Clique para ver em maior resolução"
                    target="_blank" rel="noreferrer">
                        {srcName}
                    </a>
                </div>
                <p>&#127874; <b>Criado em: </b>Da/ta/Data</p>
                <p>"Esta imagem gerada é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                <p>&#128296; <b>Ferramentas usadas: </b>sEm Dados.</p>
                <p>&#11088; <b>Temas: </b>sem Dados Também.</p>
            </div>
        </section>
    );
}

export {CartaoArteDummy,BannerExmpl,ERRORExmpl};

//FUNÇÕES MISCELÂNIAS:

// Essa função escolhe uma posição aleatória (relativa ao tamanho máximo) em um array:
function posRandom_RelTamMax(array){ 
    const posicao = Math.floor(Math.random() * array.length);
    return (posicao)
}
function numRandom_RelTamMax(array){ 
    const numero = Math.floor(Math.random() * array.length) + 1;
    return (numero)
}

// Essa função pega um número aleatório de itens em um array, e cria um array novo com eles:
function AgrupaDados(array){
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

// Essa função transforma um grupo/array de dados em uma string formatada:
// Obs.: (Ver função AgrupaDados!)
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
    evento.target.title = `Oops! Não encontrei esse desenho..
    Será que sua conexão com a internet está ok? Tente mais tarde!`; //+Info
}