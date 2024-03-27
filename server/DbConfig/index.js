const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('simpflow', 'root', 'password', {
    host: 'localhost',
    dialect: "mysql"
  });

module.exports = sequelize;