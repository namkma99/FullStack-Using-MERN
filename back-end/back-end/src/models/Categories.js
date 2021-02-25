const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Categories = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        trim: true
    },
    parentId: {
        type: String
    }
}, {timestamps: true})


module.exports = mongoose.model('Categories', Categories);