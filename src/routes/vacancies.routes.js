const vacanciesRouter = require('express').Router();

vacanciesRouter.get('/vacancies', (req, res) => {
    res.json({ msg: 'Vacancies' });
});

module.exports = vacanciesRouter;
