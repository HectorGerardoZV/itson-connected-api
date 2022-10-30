const { model } = require("mongoose");

const Users = require("./Users.schema");
const Profiles = require("./profiles/Profiles.schema");
const CompanyProfiles = require("./profiles/CompanyProfiles.schema");
const StudentProfiles = require("./profiles/StudentProfiles.schema");
const Roles = require("./Roles.schema");
const Majors = require("./Majors.schema");
const Vacancies = require("./Vacancies.schema");
const UsersVacancy = require("./UsersVacancy.schema");
const Erros = require("./logs/Errors.schema");

const UsersSchema = model("users", Users);
const ProfilesSchema = model("profiles", Profiles);
const CompanyProfilesSchema = ProfilesSchema.discriminator(
    "companyProfiles",
    CompanyProfiles
);
const StudentProfilesSchema = ProfilesSchema.discriminator(
    "studentProfiles",
    StudentProfiles
);
const RolesSchema = model("roles", Roles);
const MajorsSchema = model("majors", Majors);
const VacanciesSchema = model("vacancies", Vacancies);
const UsersVacancySchema = model("usersVacancy", UsersVacancy);
const ErrorsSchema = model("erros",Erros);

module.exports = {
    UsersSchema,
    ProfilesSchema,
    CompanyProfilesSchema,
    StudentProfilesSchema,
    RolesSchema,
    MajorsSchema,
    VacanciesSchema,
    UsersVacancySchema,
    ErrorsSchema
};
