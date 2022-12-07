const authRouter = require("express").Router();
const { login, checkToken, checkTokenAccess } = require("../controllers/auth.controller");

authRouter.post("/auth", login);
authRouter.get("/auth", checkToken);
authRouter.get("/auth/checkRole", checkTokenAccess);

module.exports = authRouter;
