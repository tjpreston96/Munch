const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cookBookSchema = new Schema({
    title: {type: String},
    image: {type: String}, 
    ingredients: {type: String},
    addedBy: { type: Schema.Types.ObjectId, ref: 'User'}
},{
    timestamps: true
})



module.exports = mongoose.model('CookBook', cookBookSchema);