import './CartaoArte.css';
// Importa um grupo de dados de exemplo:
import { arrayCArte } from '../ImgURLdata.js';
// Imports de validação "MontaCartaoArte":
import { DataAtual } from '../../../miscFunc';
import DCfail from './OOPS_No_Valid_Image_V001.png';
import * as CAmisc from './CAmiscFunc.js';

export default function CartoesArte() {
    /*
        Um cartão arte precisa de 1 imagem, 1 nome, 1 data de criação e 1 descrição,
        além de 1 OU MAIS ferramentas, e temáticas; todas válidas.
    */
    var finalCArte = [];
    const vazio = "Sem Dados."

    arrayCArte.forEach((cartaoArte)=>{
        
        /* Conferindo se as props foram definidas corretamente: */
        //           v  condição? seSim : seNão
        const imag = (cartaoArte.srcImg? cartaoArte.srcImg : DCfail);
        const nome = (cartaoArte.srcName? cartaoArte.srcName : vazio);
        // Pega o dia atual em si se não existir:
        const diaC = (cartaoArte.srcBDay? cartaoArte.srcBDay : DataAtual());
        const desc = (cartaoArte.srcDesc? cartaoArte.srcDesc : vazio);

        // As ferramentas precisam existir, e não serem arrays:
        let ferr = (cartaoArte.srcFerr? cartaoArte.srcFerr : vazio);
        ferr = (Array.isArray(ferr)? CAmisc.FormataFrase(ferr) : ferr);
        // As tematicas precisam existir, e não serem arrays:
        let tema = (cartaoArte.srcTema? cartaoArte.srcTema : vazio);
        tema = (Array.isArray(tema)? CAmisc.FormataFrase(tema) : tema);
        // OBS.: Podem surgir erros apartir daqui se gerar um id igual à de outro cartão:
        const idCA = (cartaoArte.id? cartaoArte.id : Math.floor(Math.random() * 1000)+1);

        finalCArte.push(MontaCartaoArte(imag,nome,diaC,desc,ferr,tema,idCA));}
    );
    
    /* Adicione cards de teste aqui, usando "unshift()" no finalCArte. Remova assim que terminar de testar! */
    // finalCArte.unshift(CAmisc.CAdummy());
    // finalCArte.unshift(CAmisc.CAcomBanner());
    // finalCArte.unshift(CAmisc.CAcomErro());

    return finalCArte
}

/* Monta 1 Cartão Arte com base em um modelo. Deve ser aicionado depois ao "TodosOsCartoes": */
export function MontaCartaoArte(srcImg,srcName,srcBDay,srcDesc,srcTools,srcThemes,srcID){

    // Isso garante que o nome e a descrição começará com letra MAIÚSCULA:
    srcName = srcName.charAt(0).toUpperCase() + srcName.slice(1);
    srcDesc = srcDesc.charAt(0).toUpperCase() + srcDesc.slice(1);

    return (
            <div className="cartaoArte" key={srcID}>
                <div className="cartaoArte__content">
                    <div className="previewCA cartaoArte__content__child">
                        <img src={srcImg} className="imagemCA" alt={srcName}
                        onError={(erro)=>{CAmisc.ErroAoObterDesenho(erro)}}></img>
                    </div>
                    <div className="infoCA cartaoArte__content__child">
                        <div className='infoCA_Nome'>"{srcName}"</div>
                        <hr className='infoCA_hr'></hr>
                        <span>&#127874; <b>- </b>{srcBDay}</span>
                        <span>&#128296; <b>- </b>{srcTools}</span>
                        {/*
                        <p className='infoCA_Descricao'>"{srcDesc}"</p>
                        <p>&#11088; <b>Temas: </b>{srcThemes}</p>
                        */}
                    </div>
                </div>
            </div>
        );
}