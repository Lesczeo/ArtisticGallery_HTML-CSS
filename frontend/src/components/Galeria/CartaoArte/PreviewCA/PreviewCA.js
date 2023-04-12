import './PreviewCA.css';
import DecalFail from './OOPS_No_Valid_Image_V001.png';

// Essa função garante que a imagem de erro apareça, se não é possível obter a imagem do desenho:
function ErroAoObterDesenho(evento) {
    console.log(`Não é possível acessar o desenho em "${evento.target.src}"`);
    evento.target.src = DecalFail // troca o link da imagem para o link padrão
    evento.target.title = `Oops! Não encontrei esse desenho.. Será que sua conexão com a internet está ok? Tente mais tarde!`;
}

export default function PreviewCA({imgPrew,nomPrew}) {
    return(
        <div className="previewCA zoomImgHover">
            <a className="linkImgCA"
            href={imgPrew}
            title="Clique para ver a imagem inteira"
            alt={nomPrew}
            target="_blank"
            rel="noreferrer">
                {/* <img src={DCload} alt='Carregando! ..Um instante!'></img> */}
                <img src={imgPrew} className="imagemCA" alt={nomPrew}
                onError={(erro)=>{ErroAoObterDesenho(erro)}}></img>
            </a>
        </div>);
}