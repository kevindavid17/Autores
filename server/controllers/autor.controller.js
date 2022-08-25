//tenemos al modelo en la constante producto
const Autor = require('../models/autor.model');

module.exports.createAutor = (request, response) =>{
    //desestructuramos
    const {name} = request.body;
    Autor.create({
        name
    })
        .then(autor => response.json({insertedAutor: autor, msg: 'Creación exitosa'}))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllAutores = (_,response) =>{
    Autor.find({}, null,{sort: {name: 1}})
    .then(retrievedAutores => response.json(retrievedAutores))
    .catch(err => response.json(err))
}

module.exports.getAutor = (request, response) =>{
    Autor.findOne({_id: request.params.id})
    .then(autor => response.json(autor))
    .catch(err => response.status(400).json(err));
}

module.exports.updateAutor = (request, response) =>{
    if(request.body.name !== '' && request.body.name.length > 3 ) {
        Autor.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(updatedAutor =>{
            response.json({updatedAutor: updatedAutor, msg:'Autor ha sido actualizado'});
        })
        .catch(err => response.json({err: err, msg: 'Error al actualizar el autor'}));
    }
    else{
        response.json({msg: 'El nombre debe tener más de 3 letras y no estar el campo vacío'})
    }
    
}

module.exports.deleteAutor = (request, response) =>{
    Autor.deleteOne({_id: request.params.id})
    .then(autorDeleted => response.json(autorDeleted))
    .catch(err => response.json(err))
}
