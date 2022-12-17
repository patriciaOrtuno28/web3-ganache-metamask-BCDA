import {drizzleReactHooks} from '@drizzle/react-plugin'
import { useState } from 'react';

const {useDrizzle} = drizzleReactHooks;

const EvaluacionesForm = () => {

    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);
    const [min, setMin] = useState(0);

    const { useCacheSend } = useDrizzle();
    const {send, } = useCacheSend('Asignatura', 'creaEvaluacion');

    const handleSubmit = (event) => {
        event.preventDefault();
        send(nombre, fecha>>>0, porcentaje>>>0, min>>>0);
    }

    return (
        <div>
            <br/><br/><br/><br/>
            <h2>Crear evaluación: </h2>
            <br/>
            <form>
            <label>   
                <span>Nombre:   </span>
                <input type="text" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </label>
            <br/>
            <label>   
                <span>Fecha:   </span>
                <input type="number" 
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
                <span>  (seg)</span>
            </label>
            <br/>
            <label>   
                <span>Porcentaje:   </span>
                <input type="number" 
                    value={porcentaje}
                    onChange={(e) => setPorcentaje(e.target.value)}
                />
                <span>  (%)</span>
            </label>
            <br/>
            <label>   
                <span>Nota mínima:   </span>
                <input type="number" 
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                />
            </label>
            <br/>
            <button onClick={handleSubmit}>Crear</button>
            </form>
        </div>
    );
}

export default EvaluacionesForm;