const { Schema } = require("mongoose");

const Erros = new Schema(
    {
        method: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        resource: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: new Date(),
        },
        message: {
            type: String,
            required: true,
        },
    },
    { versionKey: false }
);

module.exports = Erros;
