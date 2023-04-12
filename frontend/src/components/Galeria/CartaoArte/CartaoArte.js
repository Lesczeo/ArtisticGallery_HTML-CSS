import './CartaoArte.css';
// Importa um grupo de dados de exemplo:
import { arrayCArte } from '../ImgURLdata.js';
// Imports de validação "MontaCartaoArte":
import { DataAtual } from '../../../miscFunc';
import DCfail from './PreviewCA/OOPS_No_Valid_Image_V001.png';
import * as CAmisc from './CAmiscFunc.js';
import PreviewCA from './PreviewCA/PreviewCA.js'

export default function TodosOsCartoes() {
    var finalCArte = [];
    arrayCArte.forEach((cartaoArte)=>{
        const imag = cartaoArte.srcImg;
        const nome = cartaoArte.srcName;
        const diaC = cartaoArte.srcBDay;
        const desc = cartaoArte.srcDesc;
        const ferr = cartaoArte.srcFerr;
        const tema = cartaoArte.srcTema;
        const idCA = cartaoArte.id;

        finalCArte.push(MontaCartaoArte(imag,nome,diaC,desc,ferr,tema,idCA));}
    );
    
    /* Adicione cards de teste aqui, usando "unshift()" no finalCArte:
    OBS.: Remova assim que terminar de testar! */
    // finalCArte.unshift(CAmisc.CAdummy());
    // finalCArte.unshift(CAmisc.CAcomBanner());
    // finalCArte.unshift(CAmisc.CAcomErro());

    return <div>{finalCArte}</div>
}

/* Monta 1 Cartão Arte com base em um modelo. Deve ser aicionado depois ao "TodosOsCartoes": */
export function MontaCartaoArte(srcImg,srcName,srcBDay,srcDesc,srcTools,srcThemes,srcID){
    /*
        Um cartão arte precisa de 1 imagem, 1 nome, 1 data de criação e 1 descrição,
        além de 1 OU MAIS ferramentas, e temáticas.
    */

    /* Conferindo se as props foram definidas corretamente: */
    // OBS.: Podem surgir erros apartir daqui se gerar um id igual à de outro cartão:
    srcID = (srcID? srcID : Math.floor(Math.random() * 1000)+1);
    // ^  condição? seSim : seNão
    const vazio = "Sem Dados."
    srcName = (srcName? srcName : vazio);
    srcImg = (srcImg? srcImg : DCfail);
    srcBDay = (srcBDay? srcBDay : DataAtual()); // Pega o dia atual em si se não existir
    srcDesc = (srcDesc? srcDesc : vazio);
    // As ferramentas precisam existir, e não serem arrays:
    srcTools = (srcTools? srcTools : vazio);
    srcTools = (Array.isArray(srcTools)? CAmisc.FormataFrase(srcTools) : srcTools);
    // As tematicas precisam existir, e não serem arrays:
    srcThemes = (srcThemes? srcThemes : vazio);
    srcThemes = (Array.isArray(srcThemes)? CAmisc.FormataFrase(srcThemes) : srcThemes);

    // Isso garante que o nome e a descrição começará com letra MAIÚSCULA:
    srcName = srcName.charAt(0).toUpperCase() + srcName.slice(1);
    srcDesc = srcDesc.charAt(0).toUpperCase() + srcDesc.slice(1);

    return (
        <section className="cartaoArte" key={srcID}>
            <PreviewCA imgPrew={srcImg} nomPrew={srcName}/>
            <div className="descricaoCA">
                <div className="sectionTitulos">"{srcName}"</div>
                <p>&#127874; <b>Criado em: </b>{srcBDay}</p>
                <p className='mainDescricaoCA'>"{srcDesc}"</p>
                <p>&#128296; <b>Ferramentas usadas: </b>{srcTools}</p>
                <p>&#11088; <b>Temas: </b>{srcThemes}</p>
            </div>
        </section>);
}