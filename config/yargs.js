const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'Marca una tarea como completada', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true

        }
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .help()
    .version()
    .argv;

module.exports = {
    argv
}