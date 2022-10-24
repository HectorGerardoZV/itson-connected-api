const { Schema, Types } = require("mongoose");
const bcrypt = require("bcrypt");

const Users = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: Types.ObjectId,
            ref: "roles",
        },
    },
    { versionKey: false }
);
Users.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) return next();
        const passwordEncrypted = await bcrypt.hashSync(this.password, 10);
        this.password = passwordEncrypted;
        next();
    } catch (error) {
        next();
    }
});

Users.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = Users;
