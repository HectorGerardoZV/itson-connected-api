const { Schema, Types } = require("mongoose");

const Vacancies = new Schema(
    {
        company: {
            type: Types.ObjectId,
            ref: "users",
            required: true,
        },
        created: {
            type: Date,
            default: new Date(),
        },
        generalData: {
            type: String,
            required: true,
        },
        activities: {
            type: String,
            required: true,
        },
        offer: {
            type: String,
            required: true,
        },
        requirements: {
            type: String,
            required: true,
        },
    },
    { versionKey: false }
);

module.exports = Vacancies;
