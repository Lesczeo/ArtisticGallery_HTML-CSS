export default function SelecQuanCA() {

    return (
        <div className='botoesFiltro__child'>
            <label className='botoesFiltro__child__text'>Quantos cartões?</label>
            <input
            type="number"
            className='botoesFiltro__child__form'
            name="inputNCA"
            step="5" min="5" max="50"
            defaultValue="10"></input>
        </div>
    );
}