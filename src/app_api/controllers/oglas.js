const mongoose = require('mongoose');
const Oglas = mongoose.model('Oglas');

const getAll = (req, res) => {
    // todo implementiraj filtriranje in paginacijo
    Oglas
        .find()
        .exec((napaka, oglasi) => {
            if(napaka) {
                return res.status(500).json(napaka);
            }
            else if(!oglasi){
                return res.status(404).json({
                    "sporocilo":
                    "Ne najdem podatkov"
                });
            }
            else {

                res.status(200).json(oglasi);
            }
        });
};

const getOne = (req, res) => {
    Oglas
        .findById(req.params.id)
        .exec((napaka, oglas) => {
           if(!oglas){
               return res.status(404).json({
                   "sporocilo":
                       "Ne najdem oglasa"
               });
           }
           else if (napaka){
               return res.status(500).json(napaka, "api napaka");
           }
            console.log(oglas)
           res.status(200).json(oglas);
        });


};

const create = (req, res) => {
    if (!req.body.name ||
        !req.body.description ||
        !req.body.location) {
        res.status(400).json({"sporočilo": "Zahtevani so vsi podatki"});
    }else{
        const oglas = new Oglas();
        //nastavimo vse podatke za uporabnika
        oglas.owner = req.payload.email
        oglas.name = req.body.name
        oglas.description = req.body.description
        oglas.price = req.body.price
        oglas.location = req.body.location
        
        if(req.body.picture) {
            oglas.picture = req.body.picture
        }

        if(req.body.price) {
            oglas.price = req.body.price
        }

        oglas.save(napaka => {
            if (napaka) {
                res.status(500).json(napaka);
            } else {
                res.status(200).json(true);
            }
        });
    }
};

const update = (req, res) => {
    let oglas = {...req.body}
    Oglas.updateOne({_id:req.params.id}, oglas, (err)=>{
        if(err){
            console.log(err);
            res.status(500);
        }else {
            res.status(200).json(true);
        }
    })
};

const deleteOne = (req, res) => {
    if(req.payload.role == 2) {
        Oglas.findByIdAndDelete(req.params.id).exec((err) => {
            if (err) {
                return res.status(500).json(err);
            }else{
                return res.status(204).json(null);
            }
        });
    } else {
        Oglas.findOne({_id:req.params.id,owner:req.payload.id}).exec((err, oglas)=>{
            if(err){
                return res.status(500).json(err);
            }
            else if(!oglas){
                return res.status(404).json({"message":"not found"});
            }else{
                Oglas.findByIdAndDelete(req.params.id).exec((err) => {
                    if (err) {
                        return res.status(500).json(err);
                    }else{
                        return res.status(204).json(null);
                    }
                });
            }
        })
    }
};



module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
};
