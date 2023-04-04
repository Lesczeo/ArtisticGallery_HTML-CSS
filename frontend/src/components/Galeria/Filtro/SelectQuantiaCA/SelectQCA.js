import './SelectQCA.css';

export default function SlcQuanCA() {

    return (
        <div className='child_filtros'>
            <label className='labelQCA'>Quantos cartões?</label>
            <input
            type="number"
            className='inputQCA'
            name="inputNCA"
            step="5" min="5" max="50"
            defaultValue="10"></input>
        </div>
    );
}