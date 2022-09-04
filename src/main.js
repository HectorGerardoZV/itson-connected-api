const express = require('express');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
require('dotenv').config({ path: '.env' });

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Server running' });
});

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server running in ${HOST}:${PORT}`);
});
