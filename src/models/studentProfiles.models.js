const sequelize = require('sequelize');
const { dbObject } = require('../config/dbConnection');

const studentProfiles = dbObject.define('studentProfiles', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    idStuden: {
        type: sequelize.STRING(15),
        allowNull: true,
    },
    fullName: {
        type: sequelize.STRING(100),
        allowNull: true,
    },
    semester: {
        type: sequelize.STRING(15),
        allowNull: true,
    },
    major: {
        type: sequelize.STRING(40),
        allowNull: true,
    },
    description: {
        type: sequelize.TEXT,
        allowNull: true,
    },
    image: {
        type: sequelize.STRING(100),
        allowNull: true,
    },
});

const profile = require('./profiles.models');

studentProfiles.hasOne(profile, {
    foreignKey: 'idStudentProfile',
});

module.exports = studentProfiles;
