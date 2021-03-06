const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { oglasSchema } = require('./oglas');

const commentSchema = new mongoose.Schema({
    owner: { type: String, required: true },
    content: { type: String, required: true }
})

const userSchema = new mongoose.Schema({
    /** osebni podatki (potrebni za registracijo) **/
    name: { type: String, required: true },
    surname: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true, default: "" },
    email: { type: String, required: true, unique: true },

    /** naslov **/



    /** public podatki **/
    ratingSum: { type: Number, default: 0 },
    ratingNum: { type: Number, default: 0 },
    rating: { type: Number, default: 0.0 },
    ratingsFrom: { type: [String], default: [] },
    description: { type: String, default: "" },

    comments: { type: [commentSchema], default: [] },
    contacts: { type: [String], default: [] },


    /** polja, uporabljena za avtentikacjio/avtorizacijo **/
    role: { type: Number, default: 0 },
    /** @Roles
     * 0 - navaden uporabnik
     * 1 - premium uporabnik
     * 2 - administrator
     */
    zgoscenaVrednost: { type: String, required: true },
    nakljucnaVrednost: { type: String, required: true },
})
userSchema.methods.nastaviGeslo = function(geslo) {
    this.nakljucnaVrednost = crypto.randomBytes(16).toString('hex');
    this.zgoscenaVrednost = crypto
        .pbkdf2Sync(geslo, this.nakljucnaVrednost, 1000, 64, 'sha512')
        .toString('hex');
};
userSchema.methods.preveriGeslo = function(geslo) {
    let zgoscenaVrednost = crypto
        .pbkdf2Sync(geslo, this.nakljucnaVrednost, 1000, 64, 'sha512')
        .toString('hex');
    return this.zgoscenaVrednost === zgoscenaVrednost;
};
userSchema.methods.generirajJwt = function() {
    const datumPoteka = new Date();
    datumPoteka.setDate(datumPoteka.getDate() + 7);
    return jwt.sign({
        id: this._id,
        name: this.name,
        surname: this.surname,
        phone: this.phone,
        address: this.address,
        country: this.country,
        email: this.email,
        role: this.role,
        rating: this.rating,
        description: this.description,
        contacts: this.contacts,
        exp: parseInt(datumPoteka.getTime() / 1000, 10)
    }, process.env.JWT_GESLO);
};

mongoose.model('Comment', commentSchema, 'Comments')
mongoose.model('User', userSchema, 'Users');