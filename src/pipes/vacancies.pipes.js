//Controllers
const { vacanciesController } = require("../controllers");
const {
    addNewVacancy,
    getAllVacancies,
    getVacancyById,
    getVacanciesByName,
    getVacanciesByCompany,
    getVacanciesByPeriod,
    getVacanciesByState,
    updateVacancyById,
    deleteVacancyById,
} = vacanciesController;

const pipeLineAddNewVacancy = () => {
    return [addNewVacancy];
};

const pipeLineGetAllVacancies = () => {
    return [getAllVacancies];
};

const pipeLineGetVacancyById = () => {
    return [getVacancyById];
};

const pipeLineGetVacanciesByName = () => {
    return [getVacanciesByName];
};

const pipeLineGetVacanciesByCompany = () => {
    return [getVacanciesByCompany];
};

const pipeLineGetVacanciesByPeriod = () => {
    return [getVacanciesByPeriod];
};

const pipeLineGetVacanciesByState = () => {
    return [getVacanciesByState];
};

const pipeLineUpdateVacancyById = () => {
    return [updateVacancyById];
};

const pipeLineDeleteVacancyById = () => {
    return [deleteVacancyById];
};

module.exports = {
    pipeLineAddNewVacancy,
    pipeLineGetAllVacancies,
    pipeLineGetVacancyById,
    pipeLineGetVacanciesByName,
    pipeLineGetVacanciesByCompany,
    pipeLineGetVacanciesByPeriod,
    pipeLineGetVacanciesByState,
    pipeLineUpdateVacancyById,
    pipeLineDeleteVacancyById,
};
