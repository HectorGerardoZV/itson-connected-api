const { CompanyProfilesSchema, StudentProfilesSchema, ProfilesSchema } = require("../schemas");
const addProfileStudent = async (req, res, next) => {
    try {
        const profileInfo = new StudentProfilesSchema(req.body);
        const profileAdded = await profileInfo.save();
        res.status(200).json(profileAdded);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "profiles",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};
const addProfileCompany = async (req, res, next) => {
    try {
        const profileInfo = new CompanyProfilesSchema(req.body);
        const profileAdded = await profileInfo.save();
        res.status(200).json(profileAdded);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "profiles",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};
const getProfilesStudent = async (req, res, next) => {
    try {
        const profiles = await StudentProfilesSchema.find({});
        res.status(200).json(profiles);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "profiles",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};
const getProfilesCompany = async (req, res, next) => {
    try {
        const profiles = await CompanyProfilesSchema.find({});
        res.status(200).json(profiles);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "profiles",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};
const getAllProfiles = async (req, res, next) => {
    try {
        const profiles = await ProfilesSchema.find({});
        res.status(200).json(profiles);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "profiles",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};
const getProfileById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const profile = await ProfilesSchema.findOne({ user: id });
        res.status(200).json(profile);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "profiles",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

module.exports = {
    addProfileStudent,
    addProfileCompany,
    getProfilesStudent,
    getProfilesCompany,
    getAllProfiles,
    getProfileById,
};