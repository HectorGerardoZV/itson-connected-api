require('dotenv').config({ path: '.env' });
const express = require('express');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const { dbConnection } = require('./config/dbConnection');
const router = require('./routes/router.routes');
require('./models/models.models');

const main = async () => {
    try {
        const app = express();
        await dbConnection();
        app.use(cors());
        app.use(json());
        app.use(urlencoded({ extended: true }));
        app.use(router);

        const PORT = process.env.PORT || 4000;
        const HOST = process.env.HOST || 'localhost';
        app.listen(PORT, HOST, () => {
            console.log(`Server running in ${HOST}:${PORT}`);
        });
    } catch (error) {
        console.log(error.message);
    }
};

main();
