import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle} = drizzleReactHooks;

const CalificacionesAlumno = ({address}) =>
    <section className="AppCalificacionesAlumno">
        <h3>Mis Notas</h3>
        <table>
            <CalificacionesAlumnoHead/>
            <CalificacionesAlumnoBody address={address}/>
        </table>
    </section>;


const CalificacionesAlumnoHead = () =>
    <thead>
    <tr>
        <th>Evaluación</th>
        <th>Nota</th>
    </tr>
    </thead>;


const CalificacionesAlumnoBody = ({address}) => {
    const {useCacheCall} = useDrizzle();

    const evaluacionesLength = useCacheCall("Asignatura", "evaluacionesLength") || 0;

    let rows = useCacheCall(['Asignatura'], call => {
        let rows = [];
        for (let ei = 0; ei < evaluacionesLength; ei++) {
            const nota = call("Asignatura", "miNota", ei, {from: address});
            const ev = call("Asignatura", "evaluaciones", ei, {from: address});
            rows.push(
                <tr key={"miNotaIndex-" + ei}>
                    <td>{ev?.nombre}</td>
                    <td>
                        {nota?.tipo === "0" ? "" : ""}
                        {nota?.tipo === "1" ? "N.P." : ""}
                        {nota?.tipo === "2" ? (nota.calificacion / 100).toFixed(2) : ""}
                    </td>
                </tr>);
        }
        return rows;
    });

    return <tbody>{rows}</tbody>;
};

export default CalificacionesAlumno;
