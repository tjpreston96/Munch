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

const profileSchema = new Schema({

    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    cookbook: [cookBookSchema]
      

},{
    timestamps: true
})






module.exports = mongoose.model('User', profileSchema);