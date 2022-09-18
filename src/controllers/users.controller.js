const Users = require('../models/Users.models');

const addNewUser = async (req, res) => {
    try {
        const userBody = req.body;
        const newUser = await Users.create(userBody);
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const getUserById = async (req, res) => {
    try {
        const { idUser } = req.params;
        const user = await Users.findOne({ where: { idUser } });
        if (!user) return res.status(404).json({ msg: 'This users doesn\'t exist' });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const getAllUsers = async (__req, res) => {
    try {
        const users = await Users.findAll({});
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const updateUserById = async (req, res) => {
    try {
        const { idUser } = req.params;
        const newUserInfo = req.body;
        const userUpdated = await Users.update(
            newUserInfo,
            {
                where: { idUser },
                returning: true,
                plain: true,

            },
        );
        if (userUpdated[0] === 0) {
            return res.status(404).json({ msg: 'This users doesn\'t exist' });
        }
        return res.status(200).json(userUpdated[1]);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const deleteUserById = async (req, res) => {
    try {
        const { idUser } = req.params;
        const userDeleted = await Users.destroy({ where: { idUser } });
        if (userDeleted === 0) {
            return res.status(404).json({ msg: 'Error: This user doesn\'t exist' });
        }
        return res.status(200).json({ msg: 'User deleted' });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    addNewUser,
    getUserById,
    getAllUsers,
    updateUserById,
    deleteUserById,
};
