import CalificacionesHead from "./CalificacionesHead";
import CalificacionesBody from "./CalificacionesBody";
import { useState } from "react";

const CalificacionesPage = () => {

    const [showNF, setShowNF] = useState(false);

    const updateShowNF = () => {
        let newVal = !showNF;
        setShowNF(newVal);
      };

    return (
       
        <section className="AppCalificaciones">
            <h3>Todas las Calificaciones</h3>
            <table>
                <CalificacionesHead updateShowNF={updateShowNF}/>
                <CalificacionesBody showNF={showNF}/>
            </table>
        </section>

    );
};

export default CalificacionesPage;
