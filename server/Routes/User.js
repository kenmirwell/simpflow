const express = require("express")
const router = express.Router()
const users = require("../Controllers/Users")

/**Router code without out controller */
// router.post('/user', (req, res) => {
//     if(req) {
//         console.log("req.bodyy", req.body)
//         userModel.create({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             middle: req.body.middle,
//             email: req.body.email,
//             password: req.body.password
//         })
//         res.status(200).json(req.body)
//     } else {
//         res.status(400).json("signup failed")
//     }
// })

router.post('/user', users.signUp)
router.post('/user-login', users.login)


module.exports = router