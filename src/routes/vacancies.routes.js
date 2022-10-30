const vacanciesRouter = require("express").Router();
//PipeLines
const { vacanciesPipeLines } = require("../pipes");
const {
    pipeLineAddNewVacancy,
    pipeLineGetAllVacancies,
    pipeLineGetVacancyById,
    pipeLineGetVacanciesByCompany,
    pipeLineGetVacanciesByName,
    pipeLineGetVacanciesByState,
    pipeLineGetVacanciesByPeriod,
    pipeLineUpdateVacancyById,
    pipeLineDeleteVacancyById,
} = vacanciesPipeLines;

vacanciesRouter.post("/vacancies", pipeLineAddNewVacancy());

vacanciesRouter.get("/vacancies", pipeLineGetAllVacancies());

vacanciesRouter.get("/vacancies/:id", pipeLineGetVacancyById());

vacanciesRouter.get("/vacancies/company/:company", pipeLineGetVacanciesByCompany());

vacanciesRouter.get("/vacancies/name/:name", pipeLineGetVacanciesByName());

vacanciesRouter.get("/vacancies/activated/:activated", pipeLineGetVacanciesByState());

vacanciesRouter.get("/vacancies/period", pipeLineGetVacanciesByPeriod());

vacanciesRouter.put("/vacancies/:id", pipeLineUpdateVacancyById());

vacanciesRouter.delete("/vacancies/:id", pipeLineDeleteVacancyById());

module.exports = vacanciesRouter;
