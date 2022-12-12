
//Controllers
const { profilesController } = require("../controllers");
const {
    addProfileStudent,
    addProfileCompany,
    getProfilesCompany,
    getProfilesStudent,
    getAllProfiles,
    getProfileById,
} = profilesController;

//Validators
const { profileValidator } = require("../validators");
const { validateAddStudentProfile, validateGetProfileById, validateAddCompanyProfile } =
    profileValidator;

//Services
const { cloudFilesServices, localFilesServices } = require("../services");
const { uploadFilesStudentCloud, uploadFilesCompanyCloud } = cloudFilesServices;
const {
    deleteLocalFilesCompany,
    deleteLocalFilesStudent,
    saveLocalFilesCompany,
    saveLocalFilesStudent,
} = localFilesServices;

const pipeLineAddProfileStudent = () => {
    return [
        saveLocalFilesStudent,
        validateAddStudentProfile,
        uploadFilesStudentCloud,
        deleteLocalFilesStudent,
        addProfileStudent,
    ];
};
const pipeLineAddProfileCompany = () => {
    return [
        saveLocalFilesCompany,
        validateAddCompanyProfile,
        uploadFilesCompanyCloud,
        deleteLocalFilesCompany,
        addProfileCompany,
    ];
};
const pipeLineGetProfilesStudent = () => {
    return [getProfilesStudent];
};
const pipeLineGetProfilesCompany = () => {
    return [getProfilesCompany];
};
const pipeLineGetAllProfiles = () => {
    return [getAllProfiles];
};
const pipeLineGetProfileById = () => {
    return [validateGetProfileById, getProfileById];
};

module.exports = {
    pipeLineAddProfileStudent,
    pipeLineAddProfileCompany,
    pipeLineGetProfilesStudent,
    pipeLineGetProfilesCompany,
    pipeLineGetAllProfiles,
    pipeLineGetProfileById,
};