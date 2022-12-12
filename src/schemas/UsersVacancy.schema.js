const { Schema, Types } = require("mongoose");

const UsersVacancy = new Schema(
    {
        profiles: {
            type: [Types.ObjectId],
            ref: "profiles",
        },
        vacancy: {
            type: Types.ObjectId,
            ref: "vacancies",
        },
    },
    { versionKey: false }
);

module.exports = UsersVacancy;
