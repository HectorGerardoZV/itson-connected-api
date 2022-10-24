const { Schema } = require("mongoose");

const Roles = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { versionKey: false }
);

module.exports = Roles;
