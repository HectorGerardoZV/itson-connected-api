const majorsRouter = require('express').Router();

majorsRouter.get('/majors', (req, res) => {
    res.json({ msg: 'Majors' });
});

module.exports = majorsRouter;
