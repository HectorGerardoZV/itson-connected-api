const { MajorsSchema } = require("../schemas");

const addNewMajor = async (req, res, next) => {
    try {
        console.log(req.body);
        const major = new MajorsSchema(req.body);
        const majorCreated = await major.save();
        res.status(200).json(majorCreated);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "majors",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const getAllMajors = async (req, res, next) => {
    try {
        const majors = await MajorsSchema.find({});
        res.status(200).json(majors);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "majors",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

module.exports = {
    addNewMajor,
    getAllMajors,
};
