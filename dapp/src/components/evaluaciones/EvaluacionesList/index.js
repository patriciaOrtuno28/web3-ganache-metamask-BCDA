import {drizzleReactHooks} from '@drizzle/react-plugin';
import EvaluacionesHead from "./EvaluacionesHead";
import EvaluacionesBody from "./EvaluacionesBody";
import EvaluacionesForm from "./EvaluacionesForm";

const {useDrizzle, useDrizzleState} = drizzleReactHooks;


const EvaluacionesList = () => {

    const {useCacheCall} = useDrizzle();
    const coordinador = useCacheCall("Asignatura", "coordinador");

    const state = useDrizzleState(state => state);
    const address = state.accounts[0];

    return (
        <section className="AppEvaluaciones">
            <h3>Todas las Evaluaciones</h3>

            <table>
                <EvaluacionesHead/>
                <EvaluacionesBody/>
            </table>

            {coordinador === address ? <EvaluacionesForm/> : <div></div>}
        </section>
    )
};

export default EvaluacionesList;
