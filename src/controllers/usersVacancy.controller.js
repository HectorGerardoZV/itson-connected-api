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
            const isValidAggregation = await checkVacancyLimit(vacancy, res);
            if (isValidAggregation) {
                req.relation = usersVacancyRelation;
                updateApplication(req, res, next);
            } else {
                return res.status(403).json({ msg: "El límite de vacantes permitidas fue alcanzado" });
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
        const { vacancy, profile } = req.body;
        const relation = {
            vacancy: vacancy,
            profiles: [profile],
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
        const { body, relation } = req;
        const { profile } = body;
        const isProfileInRelation = relation.profiles.find(profileItem => profileItem.toString() === profile.toString());
        if (!isProfileInRelation) {
            relation.profiles.push(profile);
            await UsersVacancySchema.findOneAndUpdate({ _id: relation._id }, relation, { new: true });
            next();
        } else {
            return res.status(403).json({ msg: "Este perfil ya se encuentra postulado en esta vacante" });
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
    const relation = await UsersVacancySchema.findOne({ vacancy: idVacancy }).populate("vacancy");
    if (!relation) return res.status(404).json({ msg: "This vacancy desn't exist" });
    const { vacancy, profiles } = relation;
    return vacancy.limit > profiles.length;
};

module.exports = {
    getAllUsersVacancyRelations,
    applicationUser,
    addApplication,
    getVacancyInfo,
    updateVacancyLimit,
};
