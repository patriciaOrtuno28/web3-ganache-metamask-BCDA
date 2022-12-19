import {drizzleReactHooks} from "@drizzle/react-plugin";
import CalificacionEvalForm from "./CalificacionEvalForm";
import CalificacionesAlumnoForm from "./CalificacionesAlumnoForm";

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const CalificacionEvaluacion = () => {

    const {useCacheCall} = useDrizzle();
    const coordinador = useCacheCall("Asignatura", "coordinador");

    const state = useDrizzleState(state => state);
    const address = state.accounts[0];

    var hasPermission = false;
    var isAlumno = false;

    if (address === coordinador) hasPermission = true;

    const datos = useCacheCall("Asignatura", "datosProfesor", address);
    if (datos) hasPermission = true;

    const datosAlumno = useCacheCall("Asignatura", "datosAlumno", address);
    if (datosAlumno?.dni) isAlumno = true;

    return (
       <div>
        { hasPermission && <CalificacionEvalForm/> }
        { isAlumno && <CalificacionesAlumnoForm address={address}/> }
       </div>
    );
};

export default CalificacionEvaluacion;