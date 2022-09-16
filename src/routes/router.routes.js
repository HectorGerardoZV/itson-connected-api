const router = require('express').Router();
const usersRouter = require('./users.routes.js');
const rolesRouter = require('./roles.routes.js');
const profilesRouter = require('./profiles.routes.js');
const vacanciesRouter = require('./vacancies.routes.js');

router.use(usersRouter);
router.use(rolesRouter);
router.use(profilesRouter);
router.use(vacanciesRouter);

module.exports = router;
