const { UsersSchema, RolesSchema } = require('../schemas');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env' });

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UsersSchema.findOne({ username })
        if (!user) return res.status(404).json({ msg: 'Invalid credentials' });
        const isEqualPassword = await bcrypt.compareSync(password, user.password);
        if (!isEqualPassword) return res.status(404).json({ msg: 'Invalid credentials' });
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                role: user.role
            },
            process.env.SECRET_KEY,
            { expiresIn: "3d" }
        );

        res.status(200).json({ token, user: user._id });
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const checkToken = async (req, res) => {
    try {
        let token = "";
        const { authorization } = req.headers;
        token = authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.SECRET_KEY);
        if (!user) return res.status(404).json({ access: false });
        return res.status(200).json({ access: true });
    } catch (error) {
        return res.status(500).json({
            msg: error.message,
            access: false
        });
    }
};

const checkTokenAccess = async (req, res) => {

    try {
        let token = "";
        const { authorization } = req.headers;
        token = authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.SECRET_KEY);
        if (!user) return res.status(404).json({ access: false });
        const { role } = user;
        const roleFound = await RolesSchema.findOne({ _id: role });
        return res.status(200).json({ role: roleFound.name });
    } catch (error) {
        return res.status(404).json({ access: false });
    }
}

module.exports = {
    login,
    checkToken,
    checkTokenAccess
}