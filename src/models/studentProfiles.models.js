const sequelize = require('sequelize');
const { dbObject } = require('../config/dbConnection');

const StudentProfiles = dbObject.define('studentProfiles', {
    idStudentProfile: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    idStudent: {
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
    idMajor: {
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

const Profile = require('./Profiles.models');

StudentProfiles.hasOne(Profile, {
    foreignKey: 'idStudentProfile',
});

module.exports = StudentProfiles;
