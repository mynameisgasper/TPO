const mongoose = require('mongoose');

const oglasSchema = new mongoose.Schema({

    owner: {type:mongoose.Types.ObjectId, required: true},
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
    location: {type:String, required:true},
    picture: {type: String, required: false}

})

mongoose.model('Oglas', oglasSchema);

module.exports = {
    oglasSchema: oglasSchema
}
