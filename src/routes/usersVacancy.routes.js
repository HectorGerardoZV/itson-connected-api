const usersVacancyRouter = require("express").Router();
//PipeLines
const { usersVacancyPipeLines } = require("../pipes");
const { pipeLineAddAplication, pipeLineGetVacancyInfo, pipeLineGetAllUsersVacancyRelations } =
    usersVacancyPipeLines;

usersVacancyRouter.post("/usersVacancy", pipeLineAddAplication());
usersVacancyRouter.get("/usersVacancy", pipeLineGetAllUsersVacancyRelations());
usersVacancyRouter.get("/usersVacancy/:id", pipeLineGetVacancyInfo());

module.exports = usersVacancyRouter;
