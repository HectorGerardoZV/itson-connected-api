const { Schema, Types } = require("mongoose");

const UsersVacancy = new Schema(
    {
        users: {
            type: [Types.ObjectId],
            ref: "users",
        },
        vacancy: {
            type: Types.ObjectId,
            ref: "vacancies",
        },
    },
    { versionKey: false }
);

module.exports = UsersVacancy;
