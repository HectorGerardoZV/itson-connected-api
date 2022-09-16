const { roles } = require('../models/models.models');

const addNewRole = async (req, res) => {
    try {
        const roleBody = req.body;
        const newRole = await roles.create(roleBody);
        return res.status(200).json(newRole);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

const getRoleById = async (req, res) => {
    try {
        const { idRole } = req.params;
        const role = await roles.findOne({
            where: {
                idRole,
            },
        });
        return res.status(200).json(role);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

const updateRoleById = async (req, res) => {
    try {
        const roleBody = req.body;
        const { idRole } = req.params;
        const roleUpdated = await roles.update(roleBody, { where: { idRole } });
        if (roleUpdated[0] === 0) {
            return res
                .status(404)
                .json({ msg: "Error: This role doesn't exist" });
        }
        return res.status(200).json({ msg: 'Role updated' });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

const deleteRoleById = async (req, res) => {
    try {
        const { idRole } = req.params;
        const roleDeleted = await roles.destroy({ where: { idRole } });
        if (roleDeleted === 0) {
            return res
                .status(404)
                .json({ msg: "Error: This role doesn't exist" });
        }
        return res.status(200).json({ msg: 'Role deleted' });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

const getAllRoles = async (__req, res) => {
    try {
        const allRoles = await roles.findAll({});
        return res.status(200).json(allRoles);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

module.exports = {
    addNewRole,
    getRoleById,
    updateRoleById,
    deleteRoleById,
    getAllRoles,
};
