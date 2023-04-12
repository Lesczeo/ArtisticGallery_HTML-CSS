import './SelectAno.css';
import { DataAtual } from '../../../../miscFunc';
// React-Router-Dom links:
// import { useHistory } from 'react-router-dom';

export default function SlcAno() {
    // Pega o dia atual e extrai o ano para usar como métrica em <option>:
	const date = DataAtual("Ano");

    // Servirá de apoio para filtrar por ano:
    /*let history = useHistory();
    function handleChange(value) {
        history.push(`/?location=${value}`);
    }*/

    return (
        <div className='filtros'>
            <label className='labelItem'>Desenhos por ano?</label>
            <select
            // onChange={event => handleChange(event.target.value)}
            className='notLabelItem'>
                <option value="allyrs">Todos os anos</option>
                <option value="newest">{date} em diante</option>
                <option value="recent">{date-1} em diante</option>
                <option value="lastest">{date-2} em diante</option>
                <option value="oldest">Até {date-3}</option>
            </select>
        </div>
    );
}