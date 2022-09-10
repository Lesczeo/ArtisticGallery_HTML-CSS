import './InfoSite.css';

function InformacoesSite() {
    return(
        <section id="site">
          {/* Uma linha que irá informar detalhes mais técnicos sobre a construção do site: */}
          <div className="descricao_Secao">
            <div className="tituloSecao">
              <b>Sobre o site</b>
            </div>
          </div>
          <p>Este site foi criado com <b>HTML</b> e <b>CSS stylesheet</b> brutos, e não possui a responsividade completa. Ele possui como index uma página de apresentação, e possui também outras páginas que mostram imagens nesse museu virtual.</p>
          <span>Propriedade de <a id="lescLinkedInLink" className="customVisitedButton" href="https://github.com/Lesczeo" target="_blank" rel="noreferrer">Lucas Etzeo S. C.</a> - <i>2022</i></span>
        </section>
    );
}

export default InformacoesSite;