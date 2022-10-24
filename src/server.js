require("dotenv").config({ path: ".env" });
const app = require("./main");

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "localhost";
app.listen(PORT, HOST, () => {
    console.log(`Server running in ${HOST}:${PORT}`);
});
