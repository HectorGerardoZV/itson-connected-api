const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const HOST = process.env.BDD_HOST;
const PORT = process.env.BDD_PORT;
const NAME = process.env.BDD_NAME;

const dbConnection = async () => {
    const URL = `${HOST}:${PORT}/${NAME}`;
    const dbConfig = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        await mongoose.connect(URL, dbConfig);
        console.log("Database connected");
    } catch (error) {
        process.exit(0);
    }
};

module.exports = dbConnection;
