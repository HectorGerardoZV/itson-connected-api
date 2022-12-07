const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const BDD_URL = process.env.BDD_URL;


const dbConnection = async () => {
    const dbConfig = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        await mongoose.connect(BDD_URL, dbConfig);
        console.log("Database connected");
    } catch (error) {
        process.exit(0);
    }
};

module.exports = dbConnection;
