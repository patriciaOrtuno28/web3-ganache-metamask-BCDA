import {drizzleReactHooks} from '@drizzle/react-plugin';
import FormPage from "./FormPage";
import FormClosePage from "./FormClosePage";

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

function HomePage() {
    const {useCacheCall} = useDrizzle();

    const owner = useCacheCall("Asignatura", "owner");
    const coordinador = useCacheCall("Asignatura", "coordinador");
    const cerrada = useCacheCall('Asignatura', 'cerrada');

    const state = useDrizzleState(state => state);
    const address = state.accounts[0];

    return (
        <span>
            <p>Página Home de la Asignatura</p>
            <p> Address Owner = {owner ? owner : ""}</p>
            <p> Address Coordinador = {coordinador ? coordinador : ""}</p>
            {owner === address ? <FormPage/> : <div></div>}
            <p>Estado de la asignatura: {cerrada ? "Cerrada" : "Abierta"}</p>
            {coordinador === address ? <FormClosePage/> : <div></div>}
        </span>
    );
}

export default HomePage;
