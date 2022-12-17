import {drizzleReactHooks} from '@drizzle/react-plugin';

const {useDrizzle} = drizzleReactHooks;

const ProfesorRow = ({profesorIndex}) => {
    const {useCacheCall} = useDrizzle();

    const addr = useCacheCall("Asignatura", "profesores", profesorIndex) || "";

    const datos = useCacheCall("Asignatura", "datosProfesor", addr) || "";

    return <li>{datos} : {addr}</li>;
};

export default ProfesorRow;
