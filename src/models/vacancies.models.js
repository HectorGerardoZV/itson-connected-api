const sequelize = require("sequelize");
const { dbObject } = require("../config/dbConnection");

const vacancies = dbObject.define('vacancies',{
    idVacancy: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    idCompany: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    created: {
        type: sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    generalData: {
        type: sequelize.TEXT,
        allowNull: true
    },
    activities: {
        type: sequelize.TEXT,
        allowNull: true
    },
    offer: {
        type: sequelize.TEXT,
        allowNull: true
    },
    requirements: {
        type: sequelize.TEXT,
        allowNull: true
    }
});

module.exports = vacancies;

