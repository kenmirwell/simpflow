const UserModel = require("../Models/user")

exports.signUp = ((req, res) => {
    if(req) {
        UserModel.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            middle: req.body.middle,
            email: req.body.email,
            password: req.body.password
        }).then(a => {
            res.status(200).json(req.body)
        })
    } else {
        res.status(400).json("signup failed")
    }
})

exports.login = ((req, res) => {
    if(req) {
        UserModel.findOne({where: {
            email: req.body.email
        }}).then(a => {
            if(a) {
                res.status(200).json(a)
            } else {
                res.status(400).json(a)
            }
        })
    }
})