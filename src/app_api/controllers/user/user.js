const mongoose = require('mongoose');
const User = mongoose.model('User');


const getAll = (req, res) => {
    User
        .find()
        .exec((napaka, users) => {
            if (napaka) {
                return res.status(500).json(napaka);
            } else if (!users) {
                return res.status(404).json({
                    "sporocilo": "Ne najdem podatkov"
                });
            } else {

                res.status(200).json(users);
            }
        });
};

const getOne = (req, res) => {
    User
        .findById(req.params.id,'name surname phone address email rating comments description')
        .exec((napaka, user) => {
            if (!user) {
                return res.status(404).json({
                    "sporocilo": "Ne najdem uporabnika"
                });
            } else if (napaka) {
                return res.status(500).json(napaka,
                    "api napaka");
            }

            res.status(200).json(user);
        });
};

const create = (req, res) => {
    if (!req.body.name ||
        !req.body.surname ||
        !req.body.email ||
        !req.body.phone ||
        !req.body.address ||
        !req.body.role ||
        !req.body.country ||
        !req.body.password) {
        res.status(400).json({ "sporočilo": "Zahtevani so vsi podatki" });
    } else if (req.payload.role === 1000) {
        const user = new User();
        //nastavimo vse podatke za uporabnika
        user.name = req.body.name
        user.surname = req.body.surname
        user.email = req.body.email
        user.phone = req.body.phone
        user.address = req.body.address
        user.country = req.body.country
        user.role = req.body.role

        user.nastaviGeslo(req.body.password);
        user.save(napaka => {
            if (napaka) {
                res.status(500).json(napaka);
            } else {
                res.status(200).json(true);
            }
        });
    } else {
        res.status(403).json({
            message: 'dostop do te funckionalnosti je prepovedan za neadministratorske uporabnike!'
        })
    }
};

const update = (req, res) => {
    let user = {...req.body }
    User.updateOne({ _id: req.payload.id }, user, (err) => {
        if (err) {
            console.log(err.message);
            return res.status(500);
        } else {
            User.findById(req.payload.id).exec().then(user => {
                return res.status(200).json({"jwt":user.generirajJwt()});
            }).catch(err => {
                return res.status(500).json({"message":"internal server error"})
            })
        }
    })
};

const deleteOne = (req, res) => {
    if (req.payload.role !== 1000) {
        return res.status(403).json({
            message: 'dostop do te funckionalnosti je prepovedan za neadministratorske uporabnike!'
        })
    } else if (req.params.id) {
        User
            .findByIdAndDelete(req.params.id)
            .exec((napaka) => {
                if (napaka) {
                    return res.status(500).json(napaka);
                }
                res.status(204).json(null);
            });
    } else {
        return res.status(404).json({
            "sporocilo": "Ne najdem uporabnika"
        });
    }
};


module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
};
