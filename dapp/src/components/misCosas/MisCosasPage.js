import MisDatos from "./MisDatos";
import MisNotas from "./MisNotas";
import {drizzleReactHooks} from "@drizzle/react-plugin";

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const MisCosasPage = () => {

    const {useCacheCall} = useDrizzle();
    const state = useDrizzleState(state => state);
    const address = state.accounts[0];

    var rol = "";

    const owner = useCacheCall("Asignatura", "owner");
    if (address === owner) rol = "Owner";

    const coordinador = useCacheCall("Asignatura", "coordinador");
    if (address === coordinador) rol = "Coordinador";

    const datos = useCacheCall("Asignatura", "datosProfesor", address);
    if (datos) rol = "Profesor";

    const datosAlumno = useCacheCall("Asignatura", "datosAlumno", address);
    if (datosAlumno?.dni) rol = "Alumno";

    return <section className="AppMisCosas">
        <h2>Mis Cosas</h2>
        <MisDatos rol={rol}/>
        {
            (rol === "Alumno") && <MisNotas/>
        }
    </section>;
}

export default MisCosasPage;

