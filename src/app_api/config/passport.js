const passport = require('passport');
const LokalnaStrategija = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Uporabnik = mongoose.model('User');

passport.use(
    new LokalnaStrategija(
        {usernameField: 'email', passwordField: 'password'},
        (uporabniskoIme, geslo, pkKoncano) => {
            Uporabnik.findOne({ email: uporabniskoIme }, (napaka, uporabnik) => {
                // console.log("NOW IN LOCAL STRATEGY OF PASSPORT")
                // console.log("uporabnisko ime: "+uporabniskoIme)
                // console.log("password: "+geslo)
                // console.log(uporabnik)
                // console.log(uporabnik.preveriGeslo(geslo))
                if (napaka){
                    return pkKoncano(napaka);
                }
                if (!uporabnik) {
                    return pkKoncano(null, false, {
                        "sporočilo": "Napačno uporabniško ime"
                    });
                }
                if (!uporabnik.preveriGeslo(geslo)) {
                    return pkKoncano(null, false, {
                        "sporočilo": "Napačno geslo"
                    });
                }
                return pkKoncano(null, uporabnik);
                }
            );
        }
    )
);
