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
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginInline: '0.5rem'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3>Todas las Evaluaciones</h3>

                <table>
                    <EvaluacionesHead/>
                    <EvaluacionesBody/>
                </table>
            </div>

            {coordinador === address ? <EvaluacionesForm/> : <div></div>}
        </div>
    )
};

export default EvaluacionesList;
