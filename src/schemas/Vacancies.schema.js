const { Schema, Types } = require("mongoose");

const Vacancies = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        major: {
            type: Types.ObjectId,
            red: "majors",
            required: true,
        },
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
            message: "Error requirements are required",
        },
        limit: {
            type: Number,
            default: 1,
        },
        activated: {
            type: Boolean,
            default: true,
        },
    },
    { versionKey: false }
);

module.exports = Vacancies;
