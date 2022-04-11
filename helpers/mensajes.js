require("colors");

const mostrarMenu = () => {

    return new Promise ( resolve => {
        console.log("=======================".green);
        console.log("Seleccione una opción".green);
        console.log("=======================\n".green);
    
        console.log(`${'1.'.cyan} Crear tarea`); 
        console.log(`${'2.'.cyan} Listar tareas`);
        console.log(`${'3.'.cyan} Listar completadas`);
        console.log(`${'4.'.cyan} Listar pendientes`);
        console.log(`${'5.'.cyan} Completar tarea(s)`);
        console.log(`${'6.'.cyan} Borrar tarea`);
        console.log(`${'7.'.cyan} Salir`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question('Seleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    })
}

const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`\nPresione ${'ENTER'.red} para salir`, (enter) => {
            readline.close();
            resolve();
        })
    })

}

module.exports = {
    mostrarMenu,
    pausa
}