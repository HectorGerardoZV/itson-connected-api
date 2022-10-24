const { Schema, Types } = require("mongoose");

const StudentProfiles = new Schema({
    idUniversity: {
        type: String,
        unique: true
    },
    semester: {
        type: Number,
    },
    description: {
        type: String,
    },
    cv: {
        type: String,
    },
    major: {
        type: Types.ObjectId,
        ref: "majors",
    },
});
module.exports = StudentProfiles;
