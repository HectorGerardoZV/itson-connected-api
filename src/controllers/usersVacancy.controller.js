const { UsersVacancySchema, VacanciesSchema } = require("../schemas");

const getAllUsersVacancyRelations = async (req, res, next) => {
    try {
        const relations = await UsersVacancySchema.find({});
        res.status(200).json(relations);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "userVacancy",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const applicationUser = async (req, res, next) => {
    try {
        const { vacancy } = req.body;
        const usersVacancyRelation = await UsersVacancySchema.findOne({ vacancy });
        if (!usersVacancyRelation) {
            addApplication(req, res, next);
        } else {
            const isValidAggregation = await checkVacancyLimit(vacancy);
            if (isValidAggregation) {
                req.realtion = usersVacancyRelation;
                updateApplication(req, res, next);
            } else {
                return res.status(403).json({ msg: "The limit of applications was reached" });
            }
        }
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "userVacancy",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const addApplication = async (req, res, next) => {
    try {
        const { vacancy, user } = req.body;
        const relation = {
            vacancy: vacancy,
            users: [user],
        };
        const usersVacancyRelation = new UsersVacancySchema(relation);
        await usersVacancyRelation.save();
        next();
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "userVacancy",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const updateApplication = async (req, res, next) => {
    try {
        const { body, realtion } = req;
        const { user } = body;
        realtion.users.push(user);
        await UsersVacancySchema.findOneAndUpdate({ _id: realtion._id }, realtion, { new: true });
        next();
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "userVacancy",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const getVacancyInfo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const vacancy = await UsersVacancySchema.findOne({ _id: id })
            .populate("users")
            .populate("vacancy");
        if (!vacancy) return res.status(404).json({ msg: "This vacancy doesn't exist" });
        res.status(200).json(vacancy);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "userVacancy",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const updateVacancyLimit = async (req, res, next) => {
    try {
        const { vacancy } = req.body;
        const vacancyToUpdate = await VacanciesSchema.findOne({ _id: vacancy });
        vacancyToUpdate.limit = Number(vacancyToUpdate.limit) - 1;
        const vacancyUpdated = await VacanciesSchema.findOneAndUpdate(
            { _id: vacancy },
            vacancyToUpdate,
            { new: true }
        );
        if (!vacancyUpdated) return res.status(404).json({ msg: "This vacancy doesn't exist" });
        res.status(200).json({ msg: "Application successfully added" });
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "userVacancy",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const checkVacancyLimit = async (idVacancy, res) => {
    const vacancy = await VacanciesSchema.findOne({ _id: idVacancy });
    if (!vacancy) return res.status(404).json({ msg: "This vacancy desn't exist" });
    return vacancy.limit > 0;
};

module.exports = {
    getAllUsersVacancyRelations,
    applicationUser,
    addApplication,
    getVacancyInfo,
    updateVacancyLimit,
};
