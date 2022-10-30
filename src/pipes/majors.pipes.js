const { majorsController } = require("../controllers");
const { addNewMajor, getAllMajors, getMajorById, updateMajorById, deleteMajorById } =
    majorsController;

const pipeLineAddNewMajor = () => {
    return [addNewMajor];
};

const pipeLineGetAllMajors = () => {
    return [getAllMajors];
};

const pipeLineGetMajorById = () => {
    return [getMajorById];
};
const pipeLineUpdateMajorById = () => {
    return [updateMajorById];
};
const pipeLineDeleteMajorById = () => {
    return [deleteMajorById];
};

module.exports = {
    pipeLineAddNewMajor,
    pipeLineGetAllMajors,
    pipeLineGetMajorById,
    pipeLineUpdateMajorById,
    pipeLineDeleteMajorById,
};
