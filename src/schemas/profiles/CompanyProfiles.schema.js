const { Schema } = require("mongoose");

const CompanyProfiles = new Schema({
    location: {
        type: String,
        unique: true
    },
    employees: {
        type: String,
    },
    description: {
        type: String,
    },
    verified: {
        type: Boolean,
    },
});

module.exports = CompanyProfiles;
