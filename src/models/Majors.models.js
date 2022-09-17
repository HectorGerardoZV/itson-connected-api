const sequelize = require('sequelize');
const { dbObject } = require('../config/dbConnection');

const Majors = dbObject.define('majors', {
    idMajor: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    name: {
        type: sequelize.STRING(50),
        unique: true,
        allowNull: false,
    },
});

const StudentProfiles = require('./StudentProfiles.models');

Majors.hasOne(StudentProfiles, {
    foreignKey: 'idMajor',
});

module.exports = Majors;
