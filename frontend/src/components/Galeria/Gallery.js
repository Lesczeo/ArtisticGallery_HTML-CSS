import './Gallery.css';
import Decal02 from '../../img/Wireframe002.png';

function Gallery() {
  return (
    <main id="mainGallery">
        <nav id="filtro">
            <div className="tituloSecao">
                <b>Galeria artística</b>
            </div>
            <div className="caixa_Filtros">
                <input type="text" id="pesquisaFiltro" placeholder="Selecione uma data"></input>
                <div className="caixa_botoesFiltroAno">
                    <button type="button" className="botaoFiltroAno zoomHover" onClick="location.href='#\(-\) 2019'">(-) 2019</button>
                    <button type="button" className="botaoFiltroAno zoomHover" onClick="location.href='#2020'">2020</button>
                    <button type="button" className="botaoFiltroAno zoomHover" onClick="location.href='#2021'">2021</button>
                    <button type="button" className="botaoFiltroAno zoomHover" onClick="location.href='#2022'">2022</button>
                </div>
            </div>
        </nav>
        <div id="caixa_CartoesArte">
            
            <section className="cartaoArte">
                <div className="caixa_Imagem_cartaoArte">
                    <img src={Decal02} className="preview_cartaoArte" alt="imagem de uma obra de arte"></img>
                </div>
                <div className="descricao_cartaoArte">
                    <div className="tituloSecao">
                        <b>Super Drawing Example</b>
                    </div>
                    <p>"Esta imagem É de minha autoria. Ela representa o wireframe dessa página! Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                    <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
                    <a href="#preview_cartaoArte" className="zoomHover preview_MResolucao">Maior Resolução</a>
                </div>
            </section>

            <section className="cartaoArte">
                <div className="caixa_Imagem_cartaoArte">
                    <img src="https://thisartworkdoesnotexist.com/" className="preview_cartaoArte" alt="imagem de uma obra de arte"></img>
                </div>
                <div className="descricao_cartaoArte">
                    <div className="tituloSecao">
                        <b>Super Drawing Example</b>
                    </div>
                    <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                    <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
                    <a href="#thisartworkdoesnotexist.com/" className="zoomHover preview_MResolucao">Maior Resolução</a>
                </div>
            </section>
            
            <section className="cartaoArte">
                <div className="caixa_Imagem_cartaoArte">
                    <img src="https://thishorsedoesnotexist.com/" className="preview_cartaoArte" alt="imagem de uma obra de arte"></img>
                </div>
                <div className="descricao_cartaoArte">
                    <div className="tituloSecao">
                        <b>Super Drawing Example</b>
                    </div>
                    <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                    <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
                    <a href="#preview_cartaoArte" className="zoomHover preview_MResolucao">Maior Resolução</a>
                </div>
            </section>

            <section className="cartaoArte">
                <div className="caixa_Imagem_cartaoArte">
                    <img src="https://upload.wikimedia.org/wikipedia/en/5/5e/I_have_a_special_plan.jpg" className="preview_cartaoArte" alt="imagem de uma obra de arte"></img> {/* Easter Egg IHASPFTW */}
                </div>
                <div className="descricao_cartaoArte">
                    <div className="tituloSecao">
                        <b>Super Drawing Example</b>
                    </div>
                    <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                    <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
                    <a href="#preview_cartaoArte" className="zoomHover preview_MResolucao">Maior Resolução</a>
                </div>
            </section>

            <section className="cartaoArte">
                <div className="caixa_Imagem_cartaoArte">
                    <img src="https://thiscatdoesnotexist.com/" className="preview_cartaoArte" alt="imagem de uma obra de arte"></img>
                </div>
                <div className="descricao_cartaoArte">
                    <div className="tituloSecao">
                        <b>Super Drawing Example</b>
                    </div>
                    <p>"Esta imagem gerada não é de minha autoria. Estou usando-a somente para exemplificar um desenho. Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho Descrição do desenho"</p>
                    <p>Ferramentas usadas e Data Ferramentas usadas e Data</p>
                    <a href="#preview_cartaoArte" className="zoomHover preview_MResolucao">Maior Resolução</a>
                </div>
            </section>

        </div>
        <footer id="ultimaInfo">
            <span>Propriedade de <a id="lescLinkedInLink" href="https://github.com/Lesczeo" target="_blank" rel="noreferrer">Lucas Etzeo S. C.</a> - <i>2022</i></span>
        </footer>   
    </main>
  );
}

export default Gallery;