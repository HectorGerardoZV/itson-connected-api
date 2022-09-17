const router = require('express').Router();
const usersRouter = require('./users.routes');
const rolesRouter = require('./roles.routes');
const profilesRouter = require('./profiles.routes');
const vacanciesRouter = require('./vacancies.routes');
const majorsRouter = require('./majors.routes');

router.use(usersRouter);
router.use(rolesRouter);
router.use(profilesRouter);
router.use(vacanciesRouter);
router.use(majorsRouter);

module.exports = router;
