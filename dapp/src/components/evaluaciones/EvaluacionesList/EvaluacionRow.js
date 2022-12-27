import {drizzleReactHooks} from '@drizzle/react-plugin';
import {useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const EvaluacionRow = ({evaluacionIndex}) => {
    const {useCacheCall, useCacheSend} = useDrizzle();

    const ev = useCacheCall("Asignatura", "evaluaciones", evaluacionIndex);

    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);
    const [min, setMin] = useState(0);

    const {send, } = useCacheSend('Asignatura', 'modificaEvaluacion');

    const handleSubmit = (event) => {
        event.preventDefault();
        send(evaluacionIndex>>>0, nombre, fecha>>>0, porcentaje>>>0, min>>>0);
    }

    const coordinador = useCacheCall("Asignatura", "coordinador");

    const state = useDrizzleState(state => state);
    const address = state.accounts[0];

    return <tr key={"EVA-" + evaluacionIndex}>
            <th>E<sub>{evaluacionIndex}</sub></th>
            <td>{ev?.nombre}</td>
            <td>{ev?.fecha ? (new Date(1000 * ev.fecha)).toLocaleString() : ""}</td>
            <td>{ev?.porcentaje}</td>
            <td>{ev?.minimo}</td>
            <td>
                <Popup trigger={(coordinador === address) ? <button className="button-6">Editar</button>: <div></div>} 
                    position="right center">
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
                    <button className="button-6" onClick={handleSubmit}>Editar</button>
                </form>
                </Popup>
            </td>
        </tr>;
};

export default EvaluacionRow;
