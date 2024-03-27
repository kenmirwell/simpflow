const sequelize = require("../DbConfig/index")

// const User = require("./user")

const sequelizeSync = sequelize.sync({ alter: true })
    .then(result => {
        
    }).catch(err=> {
        console.log("err", err)
    })

module.exports = sequelizeSync