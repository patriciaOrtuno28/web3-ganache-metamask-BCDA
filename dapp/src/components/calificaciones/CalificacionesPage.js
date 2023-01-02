import CalificacionesTotal from "./CalificacionesTotal";
import Calificar from "./Calificar";
import CalificacionEvaluacion from "./CalificacionEvaluacion";
import {drizzleReactHooks} from "@drizzle/react-plugin";

const {useDrizzle, useDrizzleState} = drizzleReactHooks;


const CalificacionesPage = () => {

    // CalificacionesTotal solo se muestra al coordinador o a un profesor
    const {useCacheCall} = useDrizzle();
    const coordinador = useCacheCall("Asignatura", "coordinador");

    const state = useDrizzleState(state => state);
    const address = state.accounts[0];

    var hasPermission = false;

    if (address === coordinador) hasPermission = true;

    const datos = useCacheCall("Asignatura", "datosProfesor", address);
    if (datos) hasPermission = true;

    return (
        <section className="AppCalificaciones">
            <h2>Calificaciones</h2>

            <div style= {{display:'flex', flexDirection:'row', justifyContent: 'space-between', marginInline: '0.5rem'}}>
            {hasPermission && <CalificacionesTotal/>}
            <CalificacionEvaluacion style={{marginInlineEnd: '10rem'}}/>
            </div>
            <Calificar/>
        </section>
    );
};

export default CalificacionesPage;
