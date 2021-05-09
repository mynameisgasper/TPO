const mongoose = require('mongoose');
const User = mongoose.model('User');
const Comment = mongoose.model('Comment')

const getAll = (req, res) => {
    // todo implementiraj filtriranje in paginacijo
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
        .findById(req.params.id)
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
    } else {
        if (req.payload.role === 2) {
            const uporabnik = new User();
            //nastavimo vse podatke za uporabnika
            uporabnik.name = req.body.name
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
        } else {
            res.status(403).json({
                message: 'dostop do te funckionalnosti je prepovedan za neadministratorske uporabnike!'
            })
        }
    }
};

const update = (req, res) => {
    let user = {...req.body }
    console.log();
    User.updateOne({ _id: req.params.id }, user, (err) => {
        if (err) {
            console.log(err);
            res.status(500);
        } else {
            res.status(200).json(user);
        }
    })
};

const deleteOne = (req, res) => {
    if (req.payload.role !== 2) {
        return res.status(403).json({
            message: 'dostop do te funckionalnosti je prepovedan za neadministratorske uporabnike!'
        })
    } else {
        if (req.params.id) {
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
    }
};

// todo test
const addComment = (req, res) => {
    User.findById(req.query.userId).exec().then(user => {
        if (!user) {
            return res.status(404).json({ "sporocilo": "Ne najdem uporabnika" });
        } else {
            const comment = new Comment({
                owner: req.payload.email,
                content: req.body.content
            })
            user.comments.push(comment)
            user.save((err, doc) => {
                if (err) {
                    return res.status(500).json({ "message": "internal server error" })
                } else {
                    console.log(doc)
                    return res.status(200).json({ "messge": "komentar uspešno dodan" })
                }
            })
        }
    }).catch(err => {
        console.error(err.message)
        return res.status(500).json({ "message": "internal server error" })
    })
}

const deleteComment = (req, res) => {
    User.findById(req.query.userId).exec().then(user => {
        if (!user) {
            return res.status(404).json({ "sporocilo": "Ne najdem uporabnika" });
        } else {
            if (req.payload.role === 2) {
                user.comments.splice(user.comments.find(c => c._id === req.query.commentId && c.owner === req.payload.email), 1)
                user.save((err, doc) => {
                    if (err) {
                        return res.status(500).json({ "message": "internal server error" })
                    } else {
                        console.log(doc)
                        return res.status(200).json({ "message": "komentar uspešno izbrisan" })
                    }
                })
            } else {
                for (var i = 0; i < user.comments.length; i++) {
                    if (user.comments[i]._id === req.query.commentId) {
                        if (user.comments[i].owner === req.payload.email) {
                            user.comments.splice(user.comments.find(c => c._id === req.query.commentId && c.owner === req.payload.email), 1)
                            user.save((err, doc) => {
                                if (err) {
                                    return res.status(500).json({ "message": "internal server error" })
                                } else {
                                    console.log(doc)
                                    return res.status(200).json({ "message": "komentar uspešno izbrisan" })
                                }
                            })
                        } else {
                            return res.status(401).json({ "message": "uporabnik nima pravice brisati ta komentar" })
                        }
                    }
                }
            }
        }
    }).catch(err => {
        console.error(err.message)
        return res.status(500).json({ "message": "internal server error" })
    })

}

const getComments = (req,res) => {
    console.log(req.query.userId)
    User.findById(req.query.userId).exec().then(user=>{
        if(!user){
            res.status(404).json({"message":"ne najdem uporabnika"})
        }else{
            res.status(200).json(user.comments)
        }
    }).catch(err=>{
        console.log(err)
        res.status(500).json({"message":"internal server error"})
    })
}

const addRating = (req, res) => {
    User.findById(req.query.userId).exec().then(user => {
        if (!user) {
            return res.status(404).json({ "sporocilo": "Ne najdem uporabnika" });
        } else if (user.ratingsFrom.includes(rec.payload.email)) {
            return res.status(400).json({ "sporocilo": "Temu uporabniku ste ze podali oceno" });
        } else {
            user.ratingSum += req.body.rating
            user.ratingNum++
                user.rating = user.ratingSum / user.ratingNum
            user.ratingsFrom.push(req.payload.email)
            user.save((err, doc) => {
                if (err) {
                    return res.status(500).json({ "message": "internal server error" })
                } else {
                    console.log(doc)
                    return res.status(200).json({ "messge": "ocena uspešno dodana" })
                }
            })
        }
    }).catch(err => {
        console.error(err.message)
        return res.status(500).json({ "message": "internal server error" })
    })
}

const getAllOglasi = (req, res) => {
    //todo pridobi vse oglase uporabnika in vrni
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne,
    addComment,
    deleteComment,
    getComments,
    addRating
};
