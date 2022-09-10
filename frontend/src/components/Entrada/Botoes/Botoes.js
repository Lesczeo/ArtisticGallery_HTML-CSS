import './Botoes.css';

function ListaDeBotoes() {
    return(
        <section id="botoes">
          <div className="descricao_Secao">
            <div className="tituloSecao">
              <b>Galerias por tema</b>
            </div>
          </div>
          <div className="caixa_botoes">
            {/* Uma linha que irá fazer o display dos últimos 3 anos para separar os desenhos: */}
            <button type="button" className="botaoGaleria zoomHover customVisitedButton" onClick="location.href='gallery.html'">Cartoons</button>
            <button type="button" className="botaoGaleria zoomHover customVisitedButton" onClick="location.href='gallery.html'">Medievais</button>
            <button type="button" className="botaoGaleria zoomHover customVisitedButton" onClick="location.href='gallery.html'">Outros</button>
          </div>
        </section>
    );
}

export default ListaDeBotoes;