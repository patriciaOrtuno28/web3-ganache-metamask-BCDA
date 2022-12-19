
import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const SoyProfesor = ({children}) => {
    const {useCacheCall} = useDrizzle();
    const state = useDrizzleState(state => state);

    const address = state.accounts[0];

    var hasPermission = false;

    const datos = useCacheCall("Asignatura", "datosProfesor", address);
    if (datos) hasPermission = true;

    if (!hasPermission) {
        return null
    }
    return <>
        {children}
    </>

};

export default SoyProfesor;
