const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Product = new Schema({
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
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    offer: {
        type: Number,
    },
    productPicture: [
        {
            img: {
                type: String,
            }
        }
    ],
    reviews:[
        {
            userId:{type:  mongoose.Schema.Types.ObjectId, ref: 'User'},
            review: String,
        }
    ],
    category:{type: mongoose.Schema.Types.ObjectId, ref: 'Categories'},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    updateAt: Date,

}, {timestamps: true})


module.exports = mongoose.model('Product', Product);