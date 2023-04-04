import './SelectNCA.css';

export default function SlcNomeCA() {

    return (
        // OBS.: Considerar esse input para definir o número de CArte à dividir por página:
        <div className='filtros'>
            <label className='labelItem'>Desenho específico?</label>
            <input
            type="search"
            className='notLabelItem'
            name="inputNCA"
            step="5" min="5" max="50"
            placeholder='Uma palavra-chave'></input>
        </div>
    );
}