const usersRouter = require("express").Router();

//Controllers
const { usersController } = require("../controllers");
const { addNewUser, getUserById, getAllUsers, updateUserById, deleteUserById } = usersController;

//Validators
const { userValidator } = require("../validators");
const { validateAddNewUser, validateGetUserById, validateUpdateUserById,validateDeleteUserById } = userValidator;

usersRouter.post("/users", validateAddNewUser(), addNewUser);
usersRouter.get("/users", getAllUsers);
usersRouter.get("/users/:idUser", validateGetUserById(), getUserById);
usersRouter.put("/users/:idUser", validateUpdateUserById(), updateUserById);
usersRouter.delete("/users/:idUser",validateDeleteUserById(), deleteUserById);

module.exports = usersRouter;
