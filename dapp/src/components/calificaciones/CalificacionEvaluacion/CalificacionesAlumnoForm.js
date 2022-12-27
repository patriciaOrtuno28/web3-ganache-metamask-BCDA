import { useState } from 'react';
import CalificacionesAlumno from "./CalificacionesAlumno";

const CalificacionesAlumnoForm = ({address}) => {
    const [showGrades, setShowGrades] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowGrades(true);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginInlineEnd: '10rem'}}>
            <form style={{alignContent: 'center'}}>
            <h3>¿Deseas ver tus notas?</h3>
            <button className="button-6" onClick={handleSubmit}>¡Adelante!</button>
            </form>
            {
                showGrades && 
                <CalificacionesAlumno address={address} />
            }
        </div>
    );
}

export default CalificacionesAlumnoForm;