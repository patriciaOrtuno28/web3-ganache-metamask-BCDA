import {drizzleReactHooks} from '@drizzle/react-plugin';
import DatosProfesor from "./DatosProfesor";

const {useDrizzle, useDrizzleState} = drizzleReactHooks;

const MisDatos = ({rol}) => {
    const {useCacheCall} = useDrizzle();
    const drizzleState = useDrizzleState(state => state);

    const address = drizzleState.accounts[0];
    const balance = drizzleState.accountBalances[address];

    const datosAlumno = useCacheCall("Asignatura", "quienSoy", {from: address});

    return (
        <article className="AppMisDatos">
            <h3>Mis Datos</h3>
            <ul>
                <li>Rol: <span style={{color: "black", fontWeight: "bold"}}>{rol}</span></li>
                {
                    (rol === "Alumno") &&
                    <li>Nombre: <span style={{color: "blue"}}>{datosAlumno?._nombre || "No matriculado"}</span></li>
                }
                {
                    (rol === "Alumno") &&
                    <li>Email: <span style={{color: "blue"}}>{datosAlumno?._email || "No matriculado"}</span></li>
                }
                {
                    (rol === "Profesor") &&
                    <DatosProfesor address={address} />
                }
                <li>Dirección: <span style={{color: "blue"}}>{address}</span></li>
                <li>Balance: <span style={{color: "blue"}}>{balance}</span> weis</li>
            </ul>
        </article>);
};

export default MisDatos;
