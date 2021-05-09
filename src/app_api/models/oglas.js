const mongoose = require('mongoose');

const oglasSchema = new mongoose.Schema({
    owner: { type: String, required: true },
    creator: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: false },
    location: { type: String, required: true },
    picture: { type: String, required: false, default: "" }
})

mongoose.model('Oglas', oglasSchema, 'Oglasi');

module.exports = {
    oglasSchema: oglasSchema
}