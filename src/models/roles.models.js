const sequelize = require('sequelize');
const { dbObject } = require('../config/dbConnection');

const Roles = dbObject.define('roles', {
    idRole: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    name: {
        type: sequelize.STRING(30),
        unique: true,
        allowNull: false,
    },
});

const User = require('./users.models');

Roles.hasOne(User, {
    foreignKey: 'idRole',
});

module.exports = Roles;
