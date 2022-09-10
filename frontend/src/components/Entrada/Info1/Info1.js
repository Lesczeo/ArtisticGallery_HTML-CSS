import './Info1.css';
import Decal01 from './Wireframe001.png'; //'./UserImage001.png'

function InformacoesIntro() {
    return(
        <section id="info1">
            {/* Uma linha que irá informar sobre o fim e objetivo do site: */}
            <div className="descricao_Secao">
            <div className="tituloSecao">
                <b>Olá! Bem vindo ao meu museu artístico!</b>
            </div>
            <div className="paragrafo">
                <p>Sou o Lucas, estudante brasileiro de programação e adorador das artes visuais. Sempre que desejo descansar ou até refletir, não há nada igual para mim como ouvir uma boa música e desenhar sobre algo que gosto; seja isso uma paisagem, uma pessoa, um objeto ou qualquer coisa (mesmo) que me venha na cabeça.</p>
                <p>Com o tempo aprendi a melhorar minhas habilidades com desenho a medida que pratiquei durante minhas pausas no cotidiano. E com meus conhecimentos de programação, decidi compartilhar através desse site algumas das baguncinhas que fiz.</p>
            </div>
            </div>
            <div className="caixa_Imagem_Profile">
            <img src={Decal01} className="imagem_Profile" alt="imagem de wireframe"></img>
            </div>
        </section>
    );
}

export default InformacoesIntro;