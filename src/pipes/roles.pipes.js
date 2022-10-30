const { rolesController } = require("../controllers");
const { addNewRole, getAllRoles, getRoleById, updateRoleById, deleteRoleById } = rolesController;

const pipeLineAddNewRole = () => {
    return [addNewRole];
};
const pipeLineGetAllRoles = () => {
    return [getAllRoles];
};
const pipeLineGetRoleById = () => {
    return [getRoleById];
};
const pipeLineUpdateRole = () => {
    return [updateRoleById];
};
const pipeLineDeleteRole = () => {
    return [deleteRoleById];
};

module.exports = {
    pipeLineAddNewRole,
    pipeLineGetAllRoles,
    pipeLineGetRoleById,
    pipeLineUpdateRole,
    pipeLineDeleteRole,
};
