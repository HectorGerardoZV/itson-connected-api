const rolesController = require("./roles.controller");
const usersController = require("./users.controller");
const profilesController = require("./profiles.controller");
const vacanciesController = require("./vacancies.controller");
const majorsController = require("./majors.controller");
const errorsController = require("./erros.controllers");
const usersVacancyController = require("./usersVacancy.controller");

module.exports = {
    usersController,
    rolesController,
    profilesController,
    vacanciesController,
    majorsController,
    errorsController,
    usersVacancyController,
};
