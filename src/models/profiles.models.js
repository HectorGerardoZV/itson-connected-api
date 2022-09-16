const sequelize = require('sequelize');
const { dbObject } = require('../config/dbConnection');

const profiles = dbObject.define('profiles', {
    idProfile: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    idStudentProfile: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    idCompanyProfileId: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
});


const user = require("./users.models.js");
profiles.hasOne(user, {
    foreignKey: 'idProfile'
})

module.exports = profiles;
