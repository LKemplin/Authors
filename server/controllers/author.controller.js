const Author = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then(author => {
        console.log(author)
        res.json(author)
    }).catch((err) => {
        res.status(400).json({message: 'Something went wrong with create', error: err.errors})
    })
}

module.exports.displayAll = (req, res) => {
    Author.find({})
    .then((allAuthors) => {
        console.log(allAuthors);
        res.json(allAuthors);
    }).catch((err) => {
        res.status(400).json({message: 'Something went wrong with displayAll', error: err.errors});
    })
}

module.exports.getAuthorbyID = (req, res) => {
    Author.findOne({ _id: req.params.id })
    .then((author) => {
        console.log(author);
        res.json(author);
    }).catch((err) => {
        res.status(400).json({message: 'Something went wrong with findOne', error: err.errors});
    })
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true})
    .then((updatedAuthor) => {
        console.log(updatedAuthor);
        res.json(updatedAuthor);
    }).catch((err) => {
        res.status(400).json({message: 'Something went wrong with update', error: err.errors});
    })
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch((err) => {
        res.status(400).json({message: 'Something went wrong with delete', error: err.errors});
    })
}