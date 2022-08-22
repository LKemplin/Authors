const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api/authors', AuthorController.displayAll);
    app.post('/api/authors/create', AuthorController.createAuthor);
    app.get('/api/authors/:id', AuthorController.getAuthorbyID);
    app.put('/api/authors/edit/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}