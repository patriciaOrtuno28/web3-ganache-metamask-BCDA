import {drizzleReactHooks} from '@drizzle/react-plugin';
import ProfesoresForm from "./ProfesoresForm";
import ProfesoresBody from "./ProfesoresBody";

const {useDrizzle, useDrizzleState} = drizzleReactHooks;


const ProfesoresList = () => {

    const {useCacheCall} = useDrizzle();
    const owner = useCacheCall("Asignatura", "owner");

    const state = useDrizzleState(state => state);
    const address = state.accounts[0];

    return (
        <section className="AppProfesores">
            <h3>Todos los profesores</h3>

            <ProfesoresBody/>

            {owner === address ? <ProfesoresForm/> : <div></div>}
        </section>
    )
};

export default ProfesoresList;
