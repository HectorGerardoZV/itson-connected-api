const sequelize = require('sequelize');
const { dbObject } = require('../config/dbConnection');

const Profiles = dbObject.define('profiles', {
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

const User = require('./users.models');

Profiles.hasOne(User, {
    foreignKey: 'idProfile',
});

module.exports = Profiles;
