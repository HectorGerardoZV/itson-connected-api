const profilesRouter = require('express').Router();

profilesRouter.get('/profiles', (req, res) => {
    res.json({ msg: 'Profile' });
});

module.exports = profilesRouter;
