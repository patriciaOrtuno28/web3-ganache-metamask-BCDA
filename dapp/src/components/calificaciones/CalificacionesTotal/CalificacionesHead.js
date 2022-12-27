import {drizzleReactHooks} from '@drizzle/react-plugin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-solid-svg-icons";

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const CalificacionesHead = ({ updateShowNF }) => {
    const {useCacheCall} = useDrizzle();

    const coordinador = useCacheCall("Asignatura", "coordinador");
    const state = useDrizzleState(state => state);
    const address = state.accounts[0];
    var hasPermission = false;
    if (address === coordinador) hasPermission = true;

    let thead = [];
    thead.push(<th key={"chae"}>A-E</th>);
    thead.push(<th key={"chn"}>Nombre</th>);

    const el = useCacheCall("Asignatura", "evaluacionesLength") || 0;
    for (let i = 0; i < el; i++) {
        thead.push(<th key={"chev-" + i}>E<sub>{i}</sub></th>);
    }

    if (hasPermission) {
        thead.push(<th key={"notafinal"}>
            Nota Final
            <button className='button-edit' onClick={() => updateShowNF()}><FontAwesomeIcon icon={faEye} /></button> 
        </th>)
    }

    return <thead><tr>{thead}</tr></thead>;
};

export default CalificacionesHead;
