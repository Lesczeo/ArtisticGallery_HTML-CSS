import { DataAtual } from '../../../../miscFunc.js';
// React-Router-Dom links:
// import { useHistory } from 'react-router-dom';

export default function SelecAno() {
    // Pega o dia atual e extrai o ano para usar como métrica em <option>:
	const date = DataAtual("Ano");

    // Servirá de apoio para filtrar por ano:
    /*let history = useHistory();
    function handleChange(value) {
        history.push(`/?location=${value}`);
    }*/

    return (
        <div className='botoesFiltro__child'>
            <label className='botoesFiltro__child__text'>Desenhos por ano?</label>
            <select
            // onChange={event => handleChange(event.target.value)}
            className='botoesFiltro__child__form'>
                <option value="allyrs">Todos os anos</option>
                <option value="newest">{date} em diante</option>
                <option value="recent">{date-1} em diante</option>
                <option value="lastest">{date-2} em diante</option>
                <option value="oldest">Até {date-3}</option>
            </select>
        </div>
    );
}