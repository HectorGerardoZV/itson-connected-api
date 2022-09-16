const usersRouter = require("express").Router();

usersRouter.get("/users", (req, res) => {
    res.json({ msg: 'User' });
});

module.exports = usersRouter;