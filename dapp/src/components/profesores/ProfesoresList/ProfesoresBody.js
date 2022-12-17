import {drizzleReactHooks} from '@drizzle/react-plugin';

import ProfesorRow from "./ProfesorRow";

const {useDrizzle} = drizzleReactHooks;

const ProfesoresBody = () => {
    const {useCacheCall} = useDrizzle();

    const profesoresLength = useCacheCall("Asignatura", "profesoresLength");

    let rows = [];
    for (let i = 0; i < profesoresLength; i++) {
        rows.push(<ProfesorRow key={"eb-"+i} profesorIndex={i}/>);
    }
    return <ul>{rows}</ul>;
};

export default ProfesoresBody;
