const { VacanciesSchema } = require("../schemas");
const addNewVacancy = async (req, res, next) => {
    try {
        const { body } = req;
        const vacancy = new VacanciesSchema(body);
        const newVacancy = await vacancy.save();
        res.status(200).json(newVacancy);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "vacancies",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const getAllVacancies = async (req, res, next) => {
    try {
        const vacancies = await VacanciesSchema.find({});
        res.status(200).json(vacancies);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "vacancies",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const getVacancyById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const vacancy = await VacanciesSchema.findOne({ _id: id });
        if (!vacancy) return res.status(404).json({ msg: "This vacancy doesnt't exist" });
        res.status(200).json(vacancy);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "vacancies",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const getVacanciesByCompany = async (req, res, next) => {
    try {
        const { company } = req.params;
        const vacancies = await VacanciesSchema.find({ company });
        res.status(200).json(vacancies);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "vacancies",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const getVacanciesByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const vacancies = await VacanciesSchema.find({
            name: { $regex: `.*${name}.*`, $options: "i" },
        });
        res.status(200).json(vacancies);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "vacancies",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const getVacanciesByState = async (req, res, next) => {
    try {
        const { activated } = req.params;
        const vacancies = await VacanciesSchema.find({ activated });
        res.status(200).json(vacancies);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "vacancies",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const getVacanciesByPeriod = async (req, res, next) => {
    try {
        const { start, end } = req.query;
        const vacancies = await VacanciesSchema.find({
            created: {
                $gte: new Date(start),
                $lte: new Date(end),
            },
        });
        res.status(200).json(vacancies);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "vacancies",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const updateVacancyById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const vacancyUpdated = await VacanciesSchema.findOneAndUpdate(
            {
                _id: id,
            },
            body,
            { new: true }
        );
        if (!vacancyUpdated) return res.status(404).json({ msg: "This vacancy doesn't exist" });
        res.status(200).json(vacancyUpdated);
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "vacancies",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

const deleteVacancyById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const vacancyDeleted = await VacanciesSchema.findOneAndDelete({ _id: id });
        if (!vacancyDeleted) return res.status(404).json({ msg: "This vacancy doesn't exist" });
        res.status(200).json({ msg: `The vacancy ${vacancyDeleted.name.toUpperCase} was deleted` });
    } catch (error) {
        const errorLog = {
            method: req.method,
            url: req.url,
            resource: "vacancies",
            message: error.message,
        };
        req.errorLog = errorLog;
        next();
    }
};

module.exports = {
    addNewVacancy,
    getAllVacancies,
    getVacancyById,
    getVacanciesByCompany,
    getVacanciesByName,
    getVacanciesByPeriod,
    getVacanciesByState,
    updateVacancyById,
    deleteVacancyById,
};
