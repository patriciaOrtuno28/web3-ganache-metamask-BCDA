import AlumnosHead from "./AlumnosHead";
import AlumnosBody from "./AlumnosBody";
import AlumnosAuto from "./AlumnosAuto";
import AlumnosForm from "./AlumnosForm";

import {drizzleReactHooks} from '@drizzle/react-plugin';

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const AlumnosList = () => {
    
    const {useCacheCall} = useDrizzle();
    const coordinador = useCacheCall("Asignatura", "coordinador");
    const owner = useCacheCall("Asignatura", "owner");

    const state = useDrizzleState(state => state);
    const address = state.accounts[0];

    var hasPermission = false;

    if (address === coordinador || address === owner) hasPermission = true;

    const datos = useCacheCall("Asignatura", "datosProfesor", address);
    if (datos) hasPermission = true;

    return (
        <div>
            {hasPermission && 
                <section className="AppAlumnos">
                    <h3>Todos los Alumnos</h3>
                    <table>
                        <AlumnosHead/>
                        <AlumnosBody/>
                    </table>
                </section>
            }
            {!hasPermission && <AlumnosAuto/>}
            {(owner === address) && <AlumnosForm/>}
        </div>
    );
};

export default AlumnosList;