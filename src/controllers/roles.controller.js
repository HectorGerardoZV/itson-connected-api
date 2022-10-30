const { RolesSchema } = require("../schemas");

const addNewRole = async (req, res, next) => {
    try {
        const role = new RolesSchema(req.body);
        const roleCreated = await role.save();
        res.status(200).json(roleCreated);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "roles",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const getRoleById = async (req, res, next) => {
    try {
        const { idRole } = req.params;
        const role = await RolesSchema.findOne({ _id: idRole });
        if (!role) return res.status(404).json({ msg: "This role doesn't exist" });
        res.status(200).json(role);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "roles",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const updateRoleById = async (req, res, next) => {
    try {
        const { idRole } = req.params;
        const roleUpdated = await RolesSchema.findOneAndUpdate({ _id: idRole }, req.body, {
            new: true,
        });
        if (!roleUpdated) return res.status(404).json({ msg: "This role doesn't exist" });
        res.status(200).json(roleUpdated);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "roles",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const deleteRoleById = async (req, res, next) => {
    try {
        const { idRole } = req.params;
        const roleDeleted = await RolesSchema.findOneAndDelete({ _id: idRole });
        if (!roleDeleted) return res.status(404).json({ msg: "This role doesn't exist" });
        return res.status(200).json({ msg: "Role deleted" });
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "roles",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const getAllRoles = async (__req, res) => {
    try {
        const allRoles = await RolesSchema.find({});
        res.status(200).json(allRoles);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "roles",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

module.exports = {
    addNewRole,
    getRoleById,
    updateRoleById,
    deleteRoleById,
    getAllRoles,
};
