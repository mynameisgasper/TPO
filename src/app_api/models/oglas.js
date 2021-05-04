const mongoose = require('mongoose');

const oglasSchema = new mongoose.Schema({
    owner: {type:String, required: true},
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
    location: {type:String, required:true},
    picture: {type: String, required: false}
})

mongoose.model('Oglas', oglasSchema, 'Oglasi');

module.exports = {
    oglasSchema: oglasSchema
}
