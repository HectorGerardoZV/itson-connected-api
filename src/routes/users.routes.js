const usersRouter = require('express').Router();

const {
    addNewUser,
    getUserById,
    getAllUsers,
    updateUserById,
    deleteUserById,
} = require('../controllers/users.controller');

usersRouter.post('/users', addNewUser);
usersRouter.get('/users', getAllUsers);
usersRouter.get('/users/:idUser', getUserById);
usersRouter.put('/users/:idUser', updateUserById);
usersRouter.delete('/users/:idUser', deleteUserById);

module.exports = usersRouter;
