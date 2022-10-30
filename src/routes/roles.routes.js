const rolesRouter = require("express").Router();
//PipeLines
const { rolesPipelines } = require("../pipes");
const {
    pipeLineAddNewRole,
    pipeLineGetAllRoles,
    pipeLineGetRoleById,
    pipeLineUpdateRole,
    pipeLineDeleteRole,
} = rolesPipelines;

rolesRouter.get("/roles", pipeLineGetAllRoles());
rolesRouter.post("/roles", pipeLineAddNewRole());
rolesRouter.get("/roles/:idRole", pipeLineGetRoleById());
rolesRouter.put("/roles/:idRole", pipeLineUpdateRole());
rolesRouter.delete("/roles/:idRole", pipeLineDeleteRole());

module.exports = rolesRouter;
