const AutorController = require('../controllers/autor.controller');

module.exports = function(app){
    app.post('/api/autor/new', AutorController.createAutor);
    app.get('/api/autores', AutorController.getAllAutores);
    app.get('/api/autor/:id',AutorController.getAutor);
    app.put('/api/autor/:id/edit',AutorController.updateAutor);
    app.delete('/api/autor/:id/delete', AutorController.deleteAutor);
}