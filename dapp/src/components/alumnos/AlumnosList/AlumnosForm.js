import {drizzleReactHooks} from '@drizzle/react-plugin'
import { useState } from 'react';

const {useDrizzle} = drizzleReactHooks;

const AlumnosForm = () => {

    const [address, setAddress] = useState("");
    const [nombre, setNombre] = useState("");
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");

    const { useCacheSend } = useDrizzle();
    const {send, } = useCacheSend('Asignatura', 'matricular');

    const handleSubmit = (event) => {
        event.preventDefault();
        send(address, nombre, dni, email);
    }

    return (
        <div>
            <br/><br/><br/>
            <h3>Matricular alumno: </h3>
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
            <label>   
                <span>DNI:   </span>
                <input type="text" 
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                />
            </label>
            <br/>
            <label>   
                <span>Email:   </span>
                <input type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br/>
            <button class="button-6" onClick={handleSubmit}>Matricular</button>
            </form>
        </div>
    );
}

export default AlumnosForm;