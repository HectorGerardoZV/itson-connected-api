const { Schema, Types } = require("mongoose");

const Profiles = new Schema(
    {
        image: {
            type: String,
        },
        name: {
            type: String,
        },
        user: {
            type: Types.ObjectId,
            ref: "users",
        },
    },
    {
        timestamps: false,
        discriminatorKey: "profileType",
        id: false,
        toJSON: {
            getters: true,
            virtuals: true,
        },
        toObject: {
            getters: true,
            virtuals: true,
        },
    }
);

module.exports = Profiles;
