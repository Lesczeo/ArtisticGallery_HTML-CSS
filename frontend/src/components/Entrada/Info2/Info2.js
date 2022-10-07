import './Info2.css';

function InformacoesFerramentas() {
    return(
        <section id="info2">
            <div className="descricao_Secao">
                <div className="tituloSecao">
                    <b>Ferramentas que uso</b>
                </div>
            </div>
            
            {/* Uma linha que irá informar sobre algumas ferramentas usadas nos desenhos: */}
            <div className="caixa_cartaoFerramenta">
                
                {/* Cartao Ferramenta: Desenho Analógico*/}
                <div className="cartaoFerramenta">
                    <div type="button" className="caixa_Imagem_cartaoFerramenta zoomHover" title="Clique para mais informações sobre essa ferramenta">
                        <a href="https://blog.grafittiartes.com.br/desenho-analogico-ou-digital/" target="_blank" rel="noreferrer">
                            <img src="https://icons.iconarchive.com/icons/designcontest/ecommerce-business/256/edit-icon.png" alt="imagem de desenho com papel e caneta"></img>
                        </a>
                    </div>
                    <b>Desenho Analógico</b>
                    <p>O tradicional lápis e papel é ótimo quando se está longe do computador. Esse é o método que me imergiu no desenho, tal como para muitas pessoas. Quando quero fazer desenhos detalhados no virtual, utilizo esse método para esboços e faço os toques finais no MediBang</p>
                </div>
                {/* Cartao Ferramenta: Microsoft Paint*/}
                <div className="cartaoFerramenta">
                    <div type="button" className="caixa_Imagem_cartaoFerramenta zoomHover" title="Clique para mais informações sobre essa ferramenta">
                        <a href="https://support.microsoft.com/pt-br/windows/ajuda-do-paint-d62e155a-1775-6da4-0862-62a3e9e5a511" target="_blank" rel="noreferrer">
                            <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/logo_thumb/856490a8eb25974567e67d4036c3c044.png" alt="imagem da logo do Microsoft Paint"></img>
                        </a>
                    </div>
                    <b>MS Paint</b>
                    <p>Para esboços mais simples, ou com alguns estilos específicos (como pixel art), o Microsoft Paint é muito bom para alcançar esses efeitos. Qualquer máquina Windows de versão anterior ao 10 tem esse programa, e não é difícil de usar.</p>
                </div>
                {/* Cartao Ferramenta: MediBang*/}
                <div className="cartaoFerramenta">
                    <div type="button" className="caixa_Imagem_cartaoFerramenta zoomHover" title="Clique para mais informações sobre essa ferramenta">
                        <a href="https://medibangpaint.com/pt/pc/about/" target="_blank" rel="noreferrer">
                            <img src="https://consumerchoice-public.s3.amazonaws.com/services/icons/prod/60c7017e0bd05d001c9b685f_33_51d3Zp8slwLmedipaint-removebg-preview.png" alt="imagem da logo do MediBang"></img>
                        </a>
                    </div>
                    <b>MediBang Paint</b>
                    <p>Essa é uma plataforma que utilizo para desenhos com uma mecânica muito parecida com a do Photoshop. Faço desenhos com efeitos e diversos filtros utilizando o MediBang porque além de ser gratuito, é muito rico em ferramentas e possui suporte para armazenamento em nuvem.</p>
                </div>
                {/* Cartao Ferramenta: Blender3D*/}
                <div className="cartaoFerramenta">
                    <div type="button" className="caixa_Imagem_cartaoFerramenta zoomHover" title="Clique para mais informações sobre essa ferramenta">
                        <a href="https://www.blender.org/about/" target="_blank" rel="noreferrer">
                            <img src="https://devtalk.blender.org/uploads/default/optimized/2X/4/490c5bf9686b023a6104676fef2322589487601d_2_500x500.png" alt="imagem da logo do Blender 3D"></img>
                        </a>
                    </div>
                    <b>Blender</b>
                    <p>O Blender é uma plataforma gratuita de modelagem 3D que comecei a explorar este mesmo ano. Às vezes, utilizo referências nele para ilustrar melhor as posições que quero, e também o utilizo para criar modelos 3D; mesmo que eu seja iniciante em modelagem 3D ainda.</p>
                </div>
            </div>

        </section>
    );
}

export default InformacoesFerramentas;