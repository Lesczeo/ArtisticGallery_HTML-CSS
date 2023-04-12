import { imgsURLcArte } from '../ImgURLdata.js';
import MontaCartaoArte from './CartaoArte.js';
/* test-purpose:
import DCload from './PreviewCA/LoadingGif_Mn.gif'; */
import DCbanner from '../../Entrada/InfoIntro/Banner002.png';

/*
    Aqui encontra-se códigos e funções mistas que apoiam a criação dos componentes
    principais na criação dos cartão-arte da Galeria. Existem 3 Cartões Arte
    para teste nesse arquivo, mas recomenda-se não usá-los ativamente no projeto.
*/

/* O CAdummy gera um cartão com conteúdo aleatório, e sem relação. é útil para testar CSS
e conteúdos técnicos, mas não de forma informacional: */
export function CAdummy() {
    /*
        Optou-se que o Nome, Data e Descrição sejam livres de geração, sendo então
        estática/constante para qualquer chamada. Os outros dados deverão ser gerados aleatoriamente!
    */
    // Imagem (1):
    const array = imgsURLcArte;
    const imag = array[Math.floor(Math.random() * array.length)];
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

    const caDummy = MontaCartaoArte(imag,nome,diaC,desc,ferr,tema,iden)
    return(caDummy);
}
/* O CAcomBanner é como o cartão CAdummy, porém tem um conteúdo fixo. Ele é usado para testar
dimensões de imagem no "PreviewCA", quando alturas e larguras são discrepantes: */
export function CAcomBanner() {
    const imag = DCbanner;
    const nome = "Artem est de anima (Banner de Entrada)";
    const diaC = "Da-ta-Data";
    const desc = `Esta imagem é de minha autoria. Estou usando-a para exemplificar
    um desenho. Descrição do desenho Descrição do desenho Descrição do desenho
    Descrição do desenho Descrição do desenho`;
    const ferr = "MSPaint e MediBang.";
    const tema = "Outros e Cartoon.";
    
    const caCBanner = MontaCartaoArte(imag,nome,diaC,desc,ferr,tema)
    return(caCBanner);
}
/* O CAcomErro é um cartão que traz propriedades com erro, e serve como um exemplo para que
o sistema reaja contra bugs, por exemplo: */
export function CAcomErro() {
    /*
    Este exemplo usa uma imagem que não pode ser requisitada, a fim de demonstrar a função
    do previewCA "ErroAoObterDesenho()", que adiciona um placeholder mais gráfico

    No longer active website list (RIP 😭):
    * https://thishorsedoesnotexist.com/
    * https://thiscatdoesnotexist.com/
    * https://thisartworkdoesnotexist.com/ 
    */

    /* Give the no longer active website to constant "imag" */
    const imag = "https://thisartworkdoesnotexist.com/";
    const nome = "A Arte Do Erro";
    const diaC = undefined;
    const desc = "Esse desenho não devia estar aqui, algo não está certo.. Mas não entre em pânico: Me contate para que eu possa fazer os ajustes!";

    const caCErro = MontaCartaoArte(imag,nome,diaC,desc)
    return(caCErro);
}

// Essa função transforma um grupo/array de dados em uma string formatada (montadores de cartão arte):
export function FormataFrase(array){
    
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
// Essa função escolhe um número aleatório (relativo ao tamanho máximo de um array):
export function numRandom_RelTamMax(array){ 
    const numero = Math.floor(Math.random() * array.length) + 1;
    return (numero)
}
// Essa função escolhe uma posição aleatória de um array (relativa ao tamanho máximo desse array):
export function posRandom_RelTamMax(array){ 
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