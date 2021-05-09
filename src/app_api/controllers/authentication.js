const passport = require('passport');
const mongoose = require('mongoose');
const Uporabnik = mongoose.model('User');


const register = (req, res) => {
    console.log("got to register controller")
    if (!req.body.name ||
        !req.body.surname ||
        !req.body.email ||
        !req.body.phone ||
        !req.body.address ||
        !req.body.country ||
        !req.body.password) {
        return res.status(400).json({"sporočilo": "Zahtevani so vsi podatki"});
    }

    const uporabnik = new Uporabnik();
    //nastavimo vse podatke za uporabnika
    uporabnik.name =  req.body.name
    uporabnik.surname = req.body.surname
    uporabnik.email = req.body.email
    uporabnik.phone = req.body.phone
    uporabnik.address = req.body.address
    uporabnik.country = req.body.country
    if(req.body.role)uporabnik.role=req.body.role
    uporabnik.nastaviGeslo(req.body.password);
    uporabnik.save(napaka => {
        if (napaka) {
            res.status(500).json(napaka);
        } else {
            res.status(200).json({"jwt": uporabnik.generirajJwt()});
        }
    });
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({"sporočilo": "Zahtevani so vsi podatki"});
    }
    // console.log("now in login")
    passport.authenticate('local', (napaka, uporabnik, informacije) => {
        // console.log("RETURNED FROM AUTHENTICATION")
        // console.log("uporabnik: "+uporabnik);
        // console.log("napaka: "+napaka);
        // console.log("informacije: "+informacije)
        if (napaka){
            return res.status(500).json(napaka);
        }else if (uporabnik) {
            return res.status(200).json({"jwt": uporabnik.generirajJwt()});
        } else {
            return res.status(401).json(informacije);
        }
    })(req, res);
};

const updatePassword = (req, res) => {
    Uporabnik.findById(req.payload.id).exec().then(user=>{
        if(!user){
            res.status(404).json({"message":"ne najdem uporabnika"})
        }else{
            user.nastaviGeslo(req.body.password);
            user.save(napaka => {
                if (napaka) {
                    res.status(500).json(napaka);
                } else {
                    res.status(200).json({"message":"uspeh"});
                }
            });
        }
    }).catch(err=>{
        console.error(err.message)
        res.status(500).json({"message":"internal server error"})
    })

};

// const checkPasswd = (req, res) => {
//     if(!req.body.password || !req.body.currPassword){
//         return res.status(400).json({"sporočilo": "Zahtevani so vsi podatki"});
//     }
//     //TODO
//     //     preveri ali so enake
// }

module.exports = {
    register,
    login,
    updatePassword
};
