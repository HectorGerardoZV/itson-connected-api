const {Users} = require('../models/models.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: '.env'});

const login = async (req, res) => {
    try {
        const {username,password} = req.body;
        const user = await Users.findOne({
            where:{
                username
            }
        })
        if(!user) return res.status(404).json({msg: 'Invalid credentials'});
        const isEqualPassword = await bcrypt.compareSync(password, user.password);
        if(!isEqualPassword) return res.status(404).json({msg: 'Invalid credentials'});

        const token = jwt.sign(
            {
                idUser: user.idUser,
                username: user.username,
                idRole: user.idRole
            },
            process.env.SECRET_KEY,
            {expiresIn: "3d"}
        );

        res.status(200).json({token});
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

const checkToken = async (req, res) => {
    try {
        let token = "";
        const { authorization} = req.headers;
        token = authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.SECRET_KEY);
        if(!user) return res.status(404).json({access: false});
        return res.status(200).json({access: true});
    } catch (error) {
        return res.status(500).json({
            msg:error.message,
            access: false
        });
    }
};


module.exports = {
    login,
    checkToken
}