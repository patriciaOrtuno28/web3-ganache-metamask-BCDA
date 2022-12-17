module.exports = async callback => {

    try {
        const Asignatura = artifacts.require("./Asignatura.sol");

        // Usar las cuentas de usuario
        const accounts = await web3.eth.getAccounts();
        if (accounts.length < 8) {
            throw new Error("No hay cuentas.");
        }

        let asignatura = await Asignatura.deployed();

        // Identificar al owner:
        let owner = await asignatura.owner();
        console.log("Cuenta del owner =", owner);

        // Añadir un profesor
        let profesorAddress = "0xFAf53b8C434251363a353b83e52C10950Aa92B2C";
        await asignatura.addProfesor(profesorAddress, "Santiago Pavón");
        console.log("Profesor 1 =", profesorAddress);

        let profesorAddress2 = "0x71B171C9C2b4e56D6e396f4497edb223c7763609";
        await asignatura.addProfesor(profesorAddress2, "Joaquín Salvachúa");
        console.log("Profesor 2 =", profesorAddress2);

        // Ponerle como coordinador
        await asignatura.setCoordinador(profesorAddress);
        console.log("Coordinador =", profesorAddress);

        // Crear evaluaciones
        console.log("Crear cuatro evaluaciones ...");
        await asignatura.creaEvaluacion("Parcial 1", Date.now() + 60 * 24 * 3600000, 25, 4);
        await asignatura.creaEvaluacion("Parcial 2", Date.now() + 120 * 24 * 3600000, 30, 4);
        await asignatura.creaEvaluacion("Práctica 1", Date.now() + 50 * 24 * 3600000, 20, 3);
        await asignatura.creaEvaluacion("Práctica 1", Date.now() + 110 * 24 * 3600000, 25, 3);
        console.log("Evaluaciones creadas!");

        // console.log("Matricular a dos alumnos ...");
        // let evaAccount = accounts[1];
        // let pepeAccount = accounts[2];
        // console.log("Cuenta de Eva =", evaAccount);
        // console.log("Cuenta de Pepe =", pepeAccount);
        // await asignatura.automatricula("Eva Martinez", "em@dominio.es", {from: evaAccount});
        // await asignatura.automatricula("Jose Redondo", "jr@stio.com", {from: pepeAccount});

        // console.log("Añadir calificaciones:");
        // await asignatura.califica(evaAccount,  0, 1, 0);
        // await asignatura.califica(evaAccount,  1, 2, 400);
        // await asignatura.califica(evaAccount,  2, 2, 750);
        // await asignatura.califica(evaAccount,  3, 2, 900);
        // await asignatura.califica(pepeAccount, 0, 0, 0);
        // await asignatura.califica(pepeAccount, 1, 1, 0);
        // await asignatura.califica(pepeAccount, 2, 2, 350);
        // await asignatura.califica(pepeAccount, 3, 2, 650);
    } catch (err) {   // Capturar errores
        console.log(`Error: ${err}`);
    } finally {
        console.log("FIN");
    }

    callback();      // Terminar
};