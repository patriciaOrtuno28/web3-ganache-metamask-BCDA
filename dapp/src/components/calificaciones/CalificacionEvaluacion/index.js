import {drizzleReactHooks} from "@drizzle/react-plugin";
import CalificacionEvalForm from "./CalificacionEvalForm";

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const CalificacionEvaluacion = () => {

    const {useCacheCall} = useDrizzle();
    const coordinador = useCacheCall("Asignatura", "coordinador");

    const state = useDrizzleState(state => state);
    const address = state.accounts[0];

    var hasPermission = false;

    if (address === coordinador) hasPermission = true;

    const datos = useCacheCall("Asignatura", "datosProfesor", address);
    if (datos) hasPermission = true;

    return (
       <div>
        { hasPermission && <CalificacionEvalForm/> }
       </div>
    );
};

export default CalificacionEvaluacion;