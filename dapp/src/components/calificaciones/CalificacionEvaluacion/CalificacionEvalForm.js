import { useState } from 'react';
import CalificacionEvalBody from "./CalificacionEvalBody";
import CalificacionEvalHead from "./CalificacionEvalHead";

const CalificacionEvalForm = () => {

    const [index, setIndex] = useState(0);
    const [showEvTable, setShowEvTable] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowEvTable(true);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginInlineEnd: '10rem'}}>
            <h3>Obtener calificaciones para una evaluación</h3>
            <form style={{marginBottom: '2rem'}}>
            <label>   
                <span>Índice de la evaluación:   </span>
                <input type="number" 
                    value={index}
                    onChange={(e) => setIndex(e.target.value)}
                />
            </label>
            <button class="button-6" onClick={handleSubmit}>Obtener</button>
            </form>
            {
                showEvTable && 
                <table>
                    <CalificacionEvalHead />
                    <CalificacionEvalBody key={"ev-"+index} evaluacionIndex={index}/>
                </table>
            }
        </div>
    );
}

export default CalificacionEvalForm;