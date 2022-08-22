const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Author name required'],
        minlength: [3, 'Author name must be at least three characters']
    }
}, {timestamps: true})

module.exports = mongoose.model('Author', AuthorSchema);