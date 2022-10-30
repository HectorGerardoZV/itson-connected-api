const usersRouter = require("express").Router();

//PipeLines
const { usersPipeLines } = require("../pipes");
const {
    pipeLineAddNewUser,
    pipeLineGetAllUsers,
    pipeLineGetUserById,
    pipeLineUpdateUserById,
    pipeLineDeleteUserById,
} = usersPipeLines;

usersRouter.post("/users", pipeLineAddNewUser());
usersRouter.get("/users", pipeLineGetAllUsers());
usersRouter.get("/users/:idUser", pipeLineGetUserById());
usersRouter.put("/users/:idUser", pipeLineUpdateUserById());
usersRouter.delete("/users/:idUser", pipeLineDeleteUserById());

module.exports = usersRouter;
