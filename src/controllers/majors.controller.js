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

const getMajorById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const major = await MajorsSchema.findOne({ _id: id });
        if (!major) return res.status(404).json({ msg: "This major doesn't exist" });
        res.status(200).json(major);
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

const updateMajorById = async (req, res, next) => {
    try {
        const { body } = req;
        const { id } = req.params;
        const majorUpdated = await MajorsSchema.findOneAndUpdate({ _id: id }, body, { new: true });
        if (!majorUpdated) return res.status(404).json({ msg: "This major doesn't exist" });
        res.status(200).json(majorUpdated);
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

const deleteMajorById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const majorDeleted = await MajorsSchema.findOneAndDelete({ _id: id });
        if (!majorDeleted) res.status(404).json({ msg: "This major desn't exist" });
        res.status(200).json({ msg: `The major ${majorDeleted.name} was deleted` });
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
    getMajorById,
    updateMajorById,
    deleteMajorById,
};
