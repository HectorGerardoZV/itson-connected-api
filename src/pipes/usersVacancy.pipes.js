const { usersVacancyController } = require("../controllers");
const {
    getVacancyInfo,
    updateVacancyLimit,
    applicationUser,
    getAllUsersVacancyRelations,
} = usersVacancyController;

const pipeLineGetAllUsersVacancyRelations = () => {
    return [getAllUsersVacancyRelations];
};
const pipeLineAddAplication = () => {
    return [applicationUser, updateVacancyLimit];
};

const pipeLineGetVacancyInfo = () => {
    return [getVacancyInfo];
};



module.exports = {
    pipeLineGetAllUsersVacancyRelations,
    pipeLineAddAplication,
    pipeLineGetVacancyInfo,
};
