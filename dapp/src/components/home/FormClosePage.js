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
            <p>¿Desea cerrar la asignatura?  </p>
            <button class="button-6" onClick={handleSubmit}>Sí</button>
        </form>
    );
}

export default FormClosePage;