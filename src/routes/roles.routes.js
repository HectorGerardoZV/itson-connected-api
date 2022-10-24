const rolesRouter = require('express').Router();
const { rolesController } = require('../controllers');

const {
    addNewRole, deleteRoleById, getAllRoles, getRoleById, updateRoleById,
} = rolesController;

rolesRouter.get('/roles', getAllRoles);
rolesRouter.post('/roles', addNewRole);
rolesRouter.get('/roles/:idRole', getRoleById);
rolesRouter.put('/roles/:idRole', updateRoleById);
rolesRouter.delete('/roles/:idRole', deleteRoleById);

module.exports = rolesRouter;
