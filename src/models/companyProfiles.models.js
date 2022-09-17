const sequelize = require('sequelize');
const { dbObject } = require('../config/dbConnection');

const CompanyProfiles = dbObject.define('companyProfiles', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    fullName: {
        type: sequelize.STRING(100),
        allowNull: true,
    },
    location: {
        type: sequelize.STRING(100),
        allowNull: true,
    },
    numberOfEmployees: {
        type: sequelize.STRING(20),
        allowNull: true,
    },
    description: {
        type: sequelize.TEXT,
        allowNull: true,
    },
    verfied: {
        type: sequelize.BOOLEAN,
        allowNull: true,
    },
    image: {
        type: sequelize.STRING(100),
        allowNull: true,
    },
});

const Profile = require('./Profiles.models');

CompanyProfiles.hasOne(Profile, {
    foreignKey: 'idCompanyProfileId',
});

module.exports = CompanyProfiles;
