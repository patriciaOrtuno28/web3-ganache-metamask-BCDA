import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle} = drizzleReactHooks;

const CalificacionEvalRow = ({alumnoIndex, evaluacionIndex}) => {
    const {useCacheCall} = useDrizzle();

    // Obtener address del alumno actual
    const alumnoAddr = useCacheCall("Asignatura", "matriculas", alumnoIndex);

    // Obtener nombre del alumno actual
    let alumnoName = useCacheCall(['Asignatura'],
        call => alumnoAddr && call("Asignatura", "datosAlumno", alumnoAddr)?.nombre
    );

    // Obtener nota del alumno actual
    const nota = useCacheCall("Asignatura", "calificaciones", alumnoAddr, evaluacionIndex);

    var displayNota = "";

    switch(nota?.tipo){
        case "0":
            displayNota = "";
            break;
        case "1":
            displayNota = "N.P.";
            break;
        case "2":
            displayNota = (nota?.calificacion / 100).toFixed(2);
            break;
        default:
            displayNota = "";
            break;
    };   

    return <tr key={"d" + alumnoIndex}>
            <td>{alumnoName}</td>
            <td>{displayNota}</td>
        </tr>;
};

export default CalificacionEvalRow;
