const mongoose = require('mongoose');
const Oglas = mongoose.model('Oglas');

const getAll = (req, res) => {
    let query = {
        name: (req.query.filter)?new RegExp(`.*${req.query.filter}.*`,'i'):new RegExp(`.*`,'i')
    }
    Oglas.find(query).exec((napaka, oglasi) => {
        if (napaka) {
            return res.status(500).json(napaka);
        } else if (!oglasi) {
            return res.status(404).json({
                "sporocilo": "Ne najdem podatkov"
            });
        } else {
            res.status(200).json(oglasi);
        }
    });

};

const getOne = (req, res) => {
    Oglas.findById(req.params.id).exec((napaka, oglas) => {
        if (!oglas) {
            return res.status(404).json({"sporocilo": "Ne najdem oglasa"});
        } else if (napaka) {
            return res.status(500).json(napaka, "api napaka");
        }
        res.status(200).json(oglas);
    });
};

const create = (req, res) => {
    if (!req.body.name ||
        !req.body.description ||
        !req.body.location) {
        res.status(400).json({ "sporočilo": "Zahtevani so vsi podatki" });
    } else {
        const oglas = new Oglas();
        //nastavimo vse podatke za uporabnika
        oglas.owner = req.payload.email
        oglas.name = req.body.name
        oglas.description = req.body.description
        oglas.location = req.body.location
        oglas.creator = req.payload.id
        if (req.body.price)oglas.price = req.body.price
        if (req.body.picture)oglas.picture = req.body.picture
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
    let oglas = {...req.body }
    Oglas.updateOne({ _id: req.params.id, creator: req.payload.id }, oglas, (err) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            res.status(200).json(true);
        }
    })
};

const deleteOne = (req, res) => {
    Oglas.findById(req.params.id).exec().then(oglas=>{
        if(!oglas){
            res.status(404).json({"message":"ne najdem oglasa"})
        }if(oglas.creator.toString()===req.payload.id.toString() || req.payload.role === 1000){
            oglas.delete((err, response)=>{
                if(err){
                    console.error(err.message);
                    res.status(500).json({"message":"internal server error"})
                }else{
                    res.status(204).json({})
                }
            })
        }
    }).catch(err=>{
      console.error(err.message)
      res.status(500).json({"message":"internal server error"})
    })
};



module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
};
