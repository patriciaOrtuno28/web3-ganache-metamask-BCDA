import {drizzleReactHooks} from '@drizzle/react-plugin'
import { useState } from 'react';

const {useDrizzle} = drizzleReactHooks;

function FormPage() {

    const [address, setAddress] = useState("");
    const { useCacheSend } = useDrizzle();
    const {send, } = useCacheSend('Asignatura', 'setCoordinador');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`El nuevo address del coordinador es: ${address}`);
        send(address);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Introducir nuevo address del coordinador:    
                <p></p>
                <input type="text" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </label>
            <button class="button-6" onClick={handleSubmit}>Cambiar</button>
            </form>
        </div>
    );
}

export default FormPage;