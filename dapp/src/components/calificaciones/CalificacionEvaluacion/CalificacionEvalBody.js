import {drizzleReactHooks} from '@drizzle/react-plugin';
import CalificacionEvalRow from "./CalificacionEvalRow";

const {useDrizzle} = drizzleReactHooks;

const CalificacionEvalBody = ({evaluacionIndex}) => {
    const {useCacheCall} = useDrizzle();

    // Obtener alumnos matriculados
    const ml = useCacheCall("Asignatura", "matriculasLength") || 0;

    let rows = [];
    for (let i = 0; i < ml; i++) {
        rows.push(<CalificacionEvalRow key={"cb-"+i} alumnoIndex={i} evaluacionIndex={evaluacionIndex}/>);
    }

    return <tbody>{rows}</tbody>;
};

export default CalificacionEvalBody;