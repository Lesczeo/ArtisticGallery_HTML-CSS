import './InfoIntro.css';
import Decal01 from './UserImage01.png';
import Decal02 from './Banner002.png';

function InfoIntro() {
    return(
        <section id="intro">
        {/* Uma seção que irá informar sobre o fim e objetivo do site: */}
            <img src={Decal02} id="bannerProfile" alt="imagem de wireframe"></img>
            <div id="info">
                <div className="box_SectionTitulos">
                    <div className="sectionTitulos">
                        <b>Olá! Bem vindo ao meu museu artístico!</b>
                    </div>
                    <p>Sou o Lucas, estudante brasileiro de programação e adorador das artes visuais. Sempre que desejo descansar ou até refletir, não há nada igual para mim como ouvir uma boa música e desenhar sobre algo que gosto; seja isso uma paisagem, uma pessoa, um objeto ou qualquer coisa (mesmo) que me venha na cabeça.</p>
                    <p>Com o tempo aprendi a melhorar minhas habilidades com desenho a medida que pratiquei durante minhas pausas no cotidiano. E com meus conhecimentos de programação, decidi compartilhar através desse site algumas das baguncinhas que fiz.</p>
                </div>
                <div className="box_ImagemProfile">
                    <img src={Decal01} className="imagemProfile" alt="imagem de wireframe"></img>
                </div>
            </div>
        </section>
    );
}

export default InfoIntro;