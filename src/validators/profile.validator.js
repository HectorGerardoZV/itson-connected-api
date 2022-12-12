const { check, param, validationResult } = require("express-validator");
const { isValidObjectId } = require("mongoose");
const fs = require("fs");

//Schemas
const {
    UsersSchema,
    ProfilesSchema,
    StudentProfilesSchema,
    CompanyProfilesSchema,
    MajorsSchema,
} = require("../schemas");
const validateProcess = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        const errors = error.array().map((errorAux) => {
            return { param: errorAux.param, msg: errorAux.msg };
        });
        if (req.files) {
            const { files } = req;
            const { image, cv } = files;
            fs.unlinkSync(image[0].path);
            fs.unlinkSync(cv[0].path);
        }if(req.file){
            const { file } = req;
            fs.unlinkSync(file.path);
        }
        res.status(500).json(errors);
    }
};

const validateAddCompanyProfile = [
    check("description", "Description is required").notEmpty(),
    check("description", "Description is too short min 10 characters").isLength({ min: 10 }),
    check("description", "Description is too long max 1000 characters").isLength({ max: 1000 }),
    check("name", "Name is required").notEmpty(),
    check("name", "Name is too short").isLength({ min: 2 }),
    check("name", "Name is too long").isLength({ max: 100 }),
    check("location", "Name is required").notEmpty(),
    check("employees", "Employees is required").notEmpty(),
    check("user").custom(async (user) => {
        const userFound = await UsersSchema.findOne({ _id: user });
        if (!userFound) throw new Error("This user doesn't exist");
        return true;
    }),
    check("user").custom(async (user) => {
        const profile = await CompanyProfilesSchema.findOne({ user });
        if (profile) throw new Error("This user already has a registered profile.");
        return true;
    }),
    validateProcess,
];

const validateAddStudentProfile = [
    check("semester", "Semester is required").notEmpty(),
    check("semester", "Semester is too short min 3 characters").isLength({ min: 3 }),
    check("semester", "Semester is too long max 15 characters").isLength({ max: 15 }),
    check("description", "Description is required").notEmpty(),
    check("description", "Description is too short min 10 characters").isLength({ min: 10 }),
    check("description", "Description is too long max 1000 characters").isLength({ max: 1000 }),
    check("name", "Name is required").notEmpty(),
    check("user").custom(async (user) => {
        const userFound = await UsersSchema.findOne({ _id: user });
        if (!userFound) throw new Error("This user doesn't exist");
        return true;
    }),
    check("user").custom(async (user) => {
        const profile = await StudentProfilesSchema.findOne({ user });
        if (profile) throw new Error("This user already has a registered profile.");
        return true;
    }),
    check("idUniversity").custom(async (idUniversity) => {
        const profile = await StudentProfilesSchema.findOne({ idUniversity: idUniversity });
        if (profile) throw new Error("This university ID is already in use.");
        return true;
    }),
    check("major").custom(async (major) => {
        const majorFound = await MajorsSchema.findOne({ _id: major });
        if (!majorFound) throw new Error("This major doesn't exist");
        return true;
    }),
    validateProcess,
];

const validateGetProfileById = [
    param("id", "Profile ID is required").notEmpty(),
    param("id").custom(async (id) => {
        const valid = isValidObjectId(id);
        if (valid) {
            const profile = await ProfilesSchema.findOne({ user: id });
            if (!profile) throw new Error("This profile doesn't exist");
            return true;
        } else {
            throw new Error("Invalid profile id");
        }
    }),
    validateProcess,
];

module.exports = {
    validateAddStudentProfile,
    validateAddCompanyProfile,
    validateGetProfileById,
};