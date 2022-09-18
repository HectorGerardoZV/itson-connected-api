const sequelize = require('sequelize');
const { dbObject } = require('../config/dbConnection');

const Users = dbObject.define('users', {
    idUser: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    username: {
        type: sequelize.STRING(30),
        allowNull: false,
        unique: true,
        validate: {
            async isUnique(username){
                const usernameExist = await Users.findOne({where: {username:username}});
                if(usernameExist) throw new Error('This username is already being used');
            }
        }
    },
    email: {
        type: sequelize.STRING(100),
        unique: true,
        allowNull: false,
        validate: {
            isEmail:{
                args: true,
                msg: "This is not a valid email"
            },
            async isUnique(email){
                const emailExist = await Users.findOne({where: {email:email}});
                if(emailExist) throw new Error('This email is already being used');
            }
        
        }
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
        validate: {
            isDate: true
        }
    },
});

const Vacancies = require('./Vacancies.models');

Users.hasOne(Vacancies, {
    foreignKey: 'idCompany',
});
Users.belongsToMany(Vacancies, {
    through: 'user_vacancy',
    as: 'vacancies',
    foreignKey: 'idUser',
});
Vacancies.belongsToMany(Users, {
    through: 'user_vacancy',
    as: 'users',
    foreignKey: 'idVacancy',
});

module.exports = Users;
