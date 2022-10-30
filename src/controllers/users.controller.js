const { UsersSchema } = require("../schemas");

const addNewUser = async (req, res, next) => {
    try {
        const user = new UsersSchema(req.body);
        const userCreated = await user.save();
        res.status(200).json(userCreated);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "users",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { idUser } = req.params;
        const user = await UsersSchema.findOne({ _id: idUser });
        if (!user) return res.status(404).json({ msg: "This users doesn't exist" });
        res.status(200).json(user);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "users",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await UsersSchema.find({});
        res.status(200).json(users);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "users",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const updateUserById = async (req, res, next) => {
    try {
        const { idUser } = req.params;
        const newUserInfo = req.body;
        const userUpdated = await UsersSchema.findOneAndUpdate({ _id: idUser }, newUserInfo, {
            new: true,
        });
        if (!userUpdated) return res.status(404).json({ msg: "This users doesn't exist" });
        return res.status(200).json(userUpdated);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "users",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const deleteUserById = async (req, res, next) => {
    try {
        const { idUser } = req.params;
        const userDeleted = await UsersSchema.findOneAndDelete({ _id: idUser });
        if (!userDeleted) return res.status(404).json({ msg: "This users doesn't exist" });
        res.status(200).json({ msg: "User deleted" });
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "users",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

module.exports = {
    addNewUser,
    getUserById,
    getAllUsers,
    updateUserById,
    deleteUserById,
};
