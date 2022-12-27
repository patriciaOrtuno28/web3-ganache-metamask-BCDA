import {drizzleReactHooks} from "@drizzle/react-plugin";

const {useDrizzle} = drizzleReactHooks;

const CalificacionEvaluacion = ({alumnoAddr}) => {
    const {useCacheCall} = useDrizzle();

    var displayNota = "";
    
    let tipoNotaFinal = useCacheCall(['Asignatura'],
        call => alumnoAddr && call("Asignatura", "notaFinal", alumnoAddr)?.tipo
    );

    let valorNotaFinal = useCacheCall(['Asignatura'],
        call => alumnoAddr && call("Asignatura", "notaFinal", alumnoAddr)?.calificacion
    );

    switch(tipoNotaFinal){
        case "0":
            displayNota = "";
            break;
        case "1":
            displayNota = "N.P.";
            break;
        case "2":
            displayNota = (valorNotaFinal / 100).toFixed(2);
            break;
        default:
            displayNota = "";
            break;
    }; 

    return (
       <span>{displayNota}</span>
    );
};

export default CalificacionEvaluacion;