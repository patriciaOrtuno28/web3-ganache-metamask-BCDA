import {drizzleReactHooks} from '@drizzle/react-plugin'

const {useDrizzle} = drizzleReactHooks;

function FormClosePage() {
    const { useCacheSend } = useDrizzle();
    const {send, } = useCacheSend('Asignatura', 'cerrar');

    const handleSubmit = (event) => {
        event.preventDefault();
        send(); 
    }

    return (
        <form>
            <span>¿Desea cerrar la asignatura?  </span>
            <button onClick={handleSubmit}>Sí</button>
        </form>
    );
}

export default FormClosePage;