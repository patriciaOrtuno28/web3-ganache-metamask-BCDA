import {drizzleReactHooks} from '@drizzle/react-plugin';

const {useDrizzle} = drizzleReactHooks;

const DatosProfesor = ({address}) => {
    const {useCacheCall} = useDrizzle();
    const datosProfesor = useCacheCall("Asignatura", "datosProfesor", address);

    return <li>Nombre: <span style={{color: "blue"}}>{datosProfesor}</span></li>;
};

export default DatosProfesor;
