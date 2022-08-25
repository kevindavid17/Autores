//se importa un modulo 
const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Es necesario insertar un nombre del autor'],
        minlength: [3, 'Se necesita 3 o más caracteres']
    }
});

const Autor = mongoose.model('Autor', AutorSchema);

//exportamos el modelo
module.exports = Autor;