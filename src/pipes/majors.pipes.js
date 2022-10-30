const { majorsController } = require("../controllers");
const { addNewMajor, getAllMajors } = majorsController;

const pipeLineAddNewMajor = () => {
    return [addNewMajor];
};

const pipeLineGetAllMajors = () => {
    return [getAllMajors];
};

module.exports = {
    pipeLineAddNewMajor,
    pipeLineGetAllMajors,
};
