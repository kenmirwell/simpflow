const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const user = require("./Routes/User")
const UserModel = require("./Models/user")

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.use(user)

require("./Models/sequelizeSync")

/**Creates a single dummy user on DB to prevent User Table from being empty */
const existingAccount = async () => {
    await UserModel.findOne({where: {firstName: "Test"}})
        .then(account => {
            if(!account){
                UserModel.create({
                    firstName: "Test",
                    lastName: "Person",
                    middle: "X",
                    email: "testEmail@emai.com",
                    password: "password"
                })
            }
        })
}

existingAccount()

app.listen(3000, () => {
    console.log("server is running")
})