const authRouter = require("express").Router();
const { login, checkToken } = require("../controllers/auth.controller");

authRouter.post("/auth", login);    
authRouter.get("/auth", checkToken);

module.exports = authRouter;
