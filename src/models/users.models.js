const sequelize = require("sequelize");
const { dbObject } = require("../config/dbConnection");

const users = dbObject.define("users", {
    idUser: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    username: {
        type: sequelize.STRING(30),
        allowNull: false,
    },
    email: {
        type: sequelize.STRING(100),
        unique: true,
        allowNull: false,
    },
    idRole: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    idProfile: {
        type: sequelize.INTEGER,
        allowNull: true,
    },
    joined: {
        type: sequelize.DATE,
        defaultValue: new Date(),
    },
});

const vacancies = require("./vacancies.models");

users.hasOne(vacancies,{
    foreignKey: 'idCompany'
})

users.belongsToMany(vacancies, {
    through: "user_vacancy",
    as: "vacancies",
    foreignKey: "idUser",
});

vacancies.belongsToMany(users, {
    through: "user_vacancy",
    as: "users",
    foreignKey: "idVacancy",
});

module.exports = users;
