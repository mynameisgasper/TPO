const mongoose = require('mongoose');
const User = mongoose.model('User');

const getAll = (req, res) => {
    // todo implementiraj filtriranje in paginacijo
    User
        .find()
        .exec((napaka, users) => {
            if(napaka) {
                return res.status(500).json(napaka);
            }
            else if(!users){
                return res.status(404).json({
                    "sporocilo":
                    "Ne najdem podatkov"
                });
            }
            else {

                res.status(200).json(users);
            }
        });
};

const getOne = (req, res) => {
    User
        .findById(req.params.id)
        .exec((napaka, user) => {
           if(!user){
               return res.status(404).json({
                   "sporocilo":
                       "Ne najdem uporabnika"
               });
           }
           else if (napaka){
               return res.status(500).json(napaka,
                "api napaka");
           }

           res.status(200).json(user);
        });


};

const createUser = (req, res) => {
    if (!req.body.name ||
        !req.body.surname ||
        !req.body.email ||
        !req.body.phone ||
        !req.body.address ||
        !req.body.role ||
        !req.body.country ||
        !req.body.password) {
        res.status(400).json({"sporočilo": "Zahtevani so vsi podatki"});
    }else{
        if(req.payload.role===2){
            const uporabnik = new User();
            //nastavimo vse podatke za uporabnika
            uporabnik.name =  req.body.name
            uporabnik.surname = req.body.surname
            uporabnik.email = req.body.email
            uporabnik.phone = req.body.phone
            uporabnik.address = req.body.address
            uporabnik.country = req.body.country
            uporabnik.role = req.body.role

            uporabnik.nastaviGeslo(req.body.password);
            uporabnik.save(napaka => {
                if (napaka) {
                    res.status(500).json(napaka);
                } else {
                    res.status(200).json(true);
                }
            });
        }else{
            res.status(403).json({
                message:'dostop do te funckionalnosti je prepovedan za neadministratorske uporabnike!'
            })
        }
    }
};

const update = (req, res) => {
    let user = {...req.body}
    console.log();
    User.updateOne({_id:req.params.id}, user, (err)=>{
        if(err){
            console.log(err);
            res.status(500);
        }else {
            res.status(200).json(user);
        }
    })
};

const deleteOne = (req, res) => {
    if(req.payload.role!==2){
        return res.status(403).json({
            message:'dostop do te funckionalnosti je prepovedan za neadministratorske uporabnike!'
        })
    } else {
        if(req.params.id){
            User
                .findByIdAndDelete(req.params.id)
                .exec((napaka) => {
                    if (napaka) {
                        return res.status(500).json(napaka);
                    }
                    res.status(204).json(null);
                });
        }
        else {
            return res.status(404).json({
                "sporocilo":
                    "Ne najdem uporabnika"
            });
        }
    }
};



module.exports = {
    getAll,
    getOne,
    createUser,
    update,
    deleteOne
};