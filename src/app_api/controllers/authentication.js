const passport = require('passport');
const mongoose = require('mongoose');
const Uporabnik = mongoose.model('User');



/*
curl -X POST -d "name=Testis&surname=Tester&email=test@test.com&phone=031031031&birthDate=1.1.2020&address=Testing street&post=1000&country=Ljubljana&password=test" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:3000/api/registracija
*/
const register = (req, res) => {
    if (!req.body.name ||
        !req.body.surname ||
        !req.body.email ||
        !req.body.phone ||
        !req.body.birthDate ||
        !req.body.address ||
        !req.body.post ||
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
    uporabnik.birthDate = req.body.birthDate
    uporabnik.address = req.body.address
    uporabnik.post = req.body.post
    uporabnik.country = req.body.country

    uporabnik.nastaviGeslo(req.body.password);
    uporabnik.save(napaka => {
        if (napaka) {
            res.status(500).json(napaka);
        } else {
            res.status(200).json({"žeton": uporabnik.generirajJwt()});
        }
    });
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({"sporočilo": "Zahtevani so vsi podatki"});
    }
    passport.authenticate('local', (napaka, uporabnik, informacije) => {
        if (napaka)
            return res.status(500).json(napaka);
        if (uporabnik) {
            res.status(200).json({"žeton": uporabnik.generirajJwt()});
        } else {
            res.status(401).json(informacije);
        }
    })(req, res);
};

// todo 
const updatePassword = (req, res) => {
    user = User.findById({_id:req.params.userId})
    user.nastaviGeslo(req.params.password)
    user.save(napaka => {
        if (napaka) {
            res.status(500).json(napaka);
        } else {
            res.status(200).json(user);
        }
    });
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
