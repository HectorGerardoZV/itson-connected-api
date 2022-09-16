const rolesRouter = require("express").Router();

rolesRouter.get("/roles", (req, res) => {
    res.json({ msg: 'Roles' });
});

module.exports = rolesRouter;
