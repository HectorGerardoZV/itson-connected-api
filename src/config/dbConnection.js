const Sequelize = require("sequelize");
require("dotenv").config({ path: ".env" });

const host = process.env.BDD_HOST; //Database host
const port = process.env.BDD_PORT; //Database port
const dialect = process.env.BDD_DIALECT; //Database dialect to use in sequelize
const schema = process.env.BDD_SCHEMA; //Database schema to use
const user = process.env.BDD_USER; //Databse user
const password = process.env.BDD_PASSWORD; //Databse password

const dbObject = new Sequelize(schema, user, password, {
    host,
    dialect,
    port,
    operatorsAliases: false,
    define: {
        timestamps: false,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    operatorsAliases: 1,
    logging: false
});

const dbConnection = async () => {
    try {
        const connection = await dbObject.sync();
        if (connection) console.log("Database connected");
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { dbObject, dbConnection };
