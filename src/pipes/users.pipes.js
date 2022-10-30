//Controllers
const { usersController } = require("../controllers");
const { addNewUser, getUserById, getAllUsers, updateUserById, deleteUserById } = usersController;

//Validators
const { userValidator } = require("../validators");
const { validateAddNewUser, validateGetUserById, validateUpdateUserById, validateDeleteUserById } =
    userValidator;

const pipeLineAddNewUser = () => {
    return [validateAddNewUser(), addNewUser];
};

const pipeLineGetAllUsers = () => {
    return [getAllUsers];
};

const pipeLineGetUserById = () => {
    return [validateGetUserById(), getUserById];
};

const pipeLineUpdateUserById = () => {
    return [validateUpdateUserById(), updateUserById];
};
const pipeLineDeleteUserById = () => {
    return [validateDeleteUserById(), deleteUserById];
};

module.exports = {
    pipeLineAddNewUser,
    pipeLineGetAllUsers,
    pipeLineGetUserById,
    pipeLineUpdateUserById,
    pipeLineDeleteUserById,
};
