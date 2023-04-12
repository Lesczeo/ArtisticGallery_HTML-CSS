import './InfoFinal.css';
import InfoDev from '../../CMisc/InfoDev/InfoDev.js';

function InfoFinal() {
    return(
        <section id="site">
          {/* Uma linha que irá informar detalhes mais técnicos sobre a construção do site: */}
          <div className="box_SectionTitulos">
            <div className="sectionTitulos">
              <b>Notas sobre o site</b>
            </div>
          </div>
          <p>Este site foi criado com <b>HTML5</b> e <b>CSS</b>. Possui uma visualização responsiva para cada dispositivo, e utiliza <b>o Javascript</b> para uma interação mais intuitiva da página.
          Além dessa apresentação aqui, o site possui também a galeria que mostram as imagens desse museu virtual. Você poderá acessá-la e conferir meus desenhos EM BREVE através dos botões de filtros!</p>
          <InfoDev />
        </section>
    );
}

export default InfoFinal;