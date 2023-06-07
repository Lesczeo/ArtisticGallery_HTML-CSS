import './SelectTema.css';
// React-Router-Dom links:
// import { useHistory } from 'react-router-dom';

export default function SlcTema() {

    // Servirá de apoio para filtrar por tema:
    /*let history = useHistory();
    function handleChange(value) {
        history.push(`/?location=${value}`);
    }*/

    return (
        <div className='filtros'>
            <label className='labelItem'>Desenhos por ano?</label>
            <select
            // onChange={event => handleChange(event.target.value)}
            className="notLabelItem">
                <option value="east">Todos os temas</option>
                <option value="east">Cartoons</option>
                <option value="west">Medievais</option>
                <option value="south">Esboços</option>
                <option value="north">Outros</option>
            </select>
        </div>
    );
}