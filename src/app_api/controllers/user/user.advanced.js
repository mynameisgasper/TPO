//import {Oglas} from "../../../app_public/instrumented/app/Models/Oglas";

const mongoose = require('mongoose');
const Comment = mongoose.model('Comment')
const User = mongoose.model('User');
const Oglasi = mongoose.model('Oglas');

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
            for (let i = 0; i < user.comments.length; i++) {
                if (user.comments[i]._id.toString() === req.query.commentId.toString() && user.comments[i].owner === req.payload.email || user.comments[i]._id.toString() === req.query.commentId.toString() && req.payload.role === 1000) {
                    user.comments.splice(i, 1)
                    user.save((err, doc) => {
                        if (err) {
                            return res.status(500).json({ "message": "internal server error" })
                        } else {
                            return res.status(200).json({ "message": "komentar uspešno izbrisan" })
                        }
                    })
                }
            }
        }
    }).catch(err => {
        console.error(err.message)
        return res.status(500).json({ "message": "internal server error" })
    })

}

const getComments = (req,res) => {
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
        } else if (user.ratingsFrom.includes(req.payload.id)) {
            return res.status(400).json({ "sporocilo": "Temu uporabniku ste ze podali oceno" });
        } else {
            user.ratingSum = user.ratingSum + req.body.rating
            user.ratingNum++
            user.rating = user.ratingSum / user.ratingNum
            user.ratingsFrom.push(req.payload.id)
            user.save((err, doc) => {
                if (err) {
                    return res.status(500).json({ "message": "internal server error" })
                } else {
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
    Oglasi.find({creator:req.payload.id}).exec().then(oglasi => {
        if(!oglasi){
            res.status(404).json({"message":"ne najdem oglasov"})
        }else{
            res.status(200).json(oglasi)
        }
    }).catch(err=>{
        console.error(err.message)
        res.status(500).json({"message":"internal server error"})
    })

}

module.exports = {
    addComment,
    deleteComment,
    getComments,
    addRating,
    getAllOglasi
};
