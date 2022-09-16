const sequelize = require("sequelize");
const { dbObject } = require("../config/dbConnection");

const roles = dbObject.define("roles", {
    idRole: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    name: {
        type: sequelize.STRING(30),
        unique: true,
    },
});

const user = require("./users.models.js");
roles.hasOne(user, {
    foreignKey: 'idRole'
})

module.exports = roles;
