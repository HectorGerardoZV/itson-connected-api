const { Schema } = require("mongoose");

const Majors = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        acronym: {
            type: String,
            required: true,
            unique: true,
        },
        semesters: {
            type: Number,
            required: true,
        },
    },
    { versionKey: false }
);

module.exports = Majors;
