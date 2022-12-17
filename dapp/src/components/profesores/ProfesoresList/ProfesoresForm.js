import {drizzleReactHooks} from '@drizzle/react-plugin'
import { useState } from 'react';

const {useDrizzle} = drizzleReactHooks;

const ProfesoresForm = () => {

    const [nombre, setNombre] = useState("");
    const [address, setAddress] = useState("");

    const { useCacheSend } = useDrizzle();
    const {send, } = useCacheSend('Asignatura', 'addProfesor');

    const handleSubmit = (event) => {
        event.preventDefault();
        send(address, nombre);
    }

    return (
        <div>
            <br/><br/><br/>
            <h3>Crear profesor: </h3>
            <br/>
            <form>
            <label>   
                <span>Address:   </span>
                <input type="text" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </label>
            <br/>
            <label>   
                <span>Nombre:   </span>
                <input type="text" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </label>
            <br/>
            <button onClick={handleSubmit}>Crear</button>
            </form>
        </div>
    );
}

export default ProfesoresForm;