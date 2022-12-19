import {drizzleReactHooks} from '@drizzle/react-plugin';
const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const EvaluacionesHead = () => {

    const {useCacheCall} = useDrizzle();
    const coordinador = useCacheCall("Asignatura", "coordinador");

    const state = useDrizzleState(state => state);
    const address = state.accounts[0];

    return(
        <thead>
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>%</th>
            <th>Nota mín.</th>
            {(coordinador === address) ? <th>Editar</th> : <th></th>}
        </tr>
        </thead>
    );
};

export default EvaluacionesHead;
