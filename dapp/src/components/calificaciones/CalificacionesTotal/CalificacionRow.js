import {drizzleReactHooks} from '@drizzle/react-plugin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import {useState} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const CalificacionRow = ({alumnoIndex}) => {
    const {useCacheCall, useCacheSend} = useDrizzle();

    const [nota, setNota] = useState(0);
    const [ev, setEv] = useState(0);

    // Obtener permisos de profesor
    const state = useDrizzleState(state => state);
    const address = state.accounts[0];
    var hasPermission = false;
    const datos = useCacheCall("Asignatura", "datosProfesor", address);
    if (datos) hasPermission = true;

    // Obtener nombre del alumno
    const alumnoAddr = useCacheCall("Asignatura", "matriculas", alumnoIndex);

    let alumnoName = useCacheCall(['Asignatura'],
        call => alumnoAddr && call("Asignatura", "datosAlumno", alumnoAddr)?.nombre
    );

    // Editar nota
    const {send, } = useCacheSend('Asignatura', 'califica');

    const handleSubmit = (event) => {
        event.preventDefault();
        send(alumnoAddr, ev, "2", nota);
    }

    // Obtener nota del alumno
    let cells = useCacheCall(['Asignatura'], call => {
        if (!alumnoAddr) { return []; }

        let cells = [];
        const evaluacionesLength = call("Asignatura", "evaluacionesLength") || 0;
        for (let ei = 0; ei < evaluacionesLength; ei++) {
            const nota = call("Asignatura", "calificaciones", alumnoAddr, ei);
            cells.push(
                <td key={"p2-" + alumnoIndex + "-" + ei}>
                    {nota?.tipo === "0" ? "" : ""}
                    {nota?.tipo === "1" ? "N.P." : ""}
                    {nota?.tipo === "2" ? (nota?.calificacion / 100).toFixed(2) : ""}
                    <Popup 
                        trigger={hasPermission ? 
                                    <button className='button-edit'><FontAwesomeIcon icon={faPenToSquare} /></button> 
                                    : <div></div>} 
                        position="right center">
                        <form>
                            <label>   
                                <span>Nota:   </span>
                                <input type="number" 
                                    value={nota}
                                    onChange={(e) => setNota(e.target.value)}
                                />
                            </label>
                            <button class="button-6" onClick={() => {setEv(ei); handleSubmit(); }}>Editar</button>
                        </form>
                    </Popup>
                </td>
            );
        }
        return cells;
    });

    return <tr key={"d" + alumnoIndex}>
            <th>A<sub>{alumnoIndex}</sub></th>
            <td>{alumnoName}</td>
            {cells}
        </tr>;
};

export default CalificacionRow;
