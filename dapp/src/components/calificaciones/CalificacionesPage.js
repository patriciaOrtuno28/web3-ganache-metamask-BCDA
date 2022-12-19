import CalificacionesTotal from "./CalificacionesTotal";
import Calificar from "./Calificar";
import CalificacionEvaluacion from "./CalificacionEvaluacion";


const CalificacionesPage = () => {

    return (
        <section className="AppCalificaciones">
            <h2>Calificaciones</h2>

            <div style= {{display:'flex', flexDirection:'row', justifyContent: 'space-between', marginInline: '0.5rem'}}>
            <CalificacionesTotal/>
            <CalificacionEvaluacion style={{marginInlineEnd: '10rem'}}/>
            </div>
            <Calificar/>
        </section>
    );
};

export default CalificacionesPage;
