const { check, param, validationResult } = require("express-validator");
const bcryt = require("bcrypt");
const validateAddNewUser = () => {
    return [
        check("username", "username is required").notEmpty(),
        check("username", "username too short").isLength({ min: 3 }),
        check("username", "username too long").isLength({ max: 20 }),
        check("email", "email is required").notEmpty(),
        check("email", "invalid email format").isEmail(),
        check("password", "password is required").notEmpty(),
        check("password", "password is too short").isLength({ min: 5 }),
        check("password", "password is too long").isLength({ max: 50 }),
        check("role", "role is required").notEmpty(),
        check("role", "invalid role").isLength({ min: 24, max: 24 }),
        (req, res, next) => {
            try {
                validationResult(req).throw();
                return next();
            } catch (error) {
                const errors = error.array().map((errorAux) => {
                    return { param: errorAux.param, msg: errorAux.msg };
                });
                res.status(400).json({ errors });
            }
        },
    ];
};

const validateGetUserById = () => {
    return [
        param("idUser", "Invalid id product must be a string").not().isNumeric(),
        param("idUser", "Invalida id product").isLength({ min: 24, max: 24 }),
        (req, res, next) => {
            try {
                validationResult(req).throw();
                return next();
            } catch (error) {
                const errors = error.array().map((errorAux) => {
                    return { param: errorAux.param, msg: errorAux.msg };
                });
                res.status(400).json({ errors });
            }
        },
    ];
};

const validateUpdateUserById = () => {
    return [
        param("idUser", "Invalid id product must be a string").not().isNumeric(),
        param("idUser", "Invalida id product").isLength({ min: 24, max: 24 }),
        check("username", "username too short").optional().isLength({ min: 3 }),
        check("username", "username too long").optional().isLength({ max: 20 }),
        check("email", "invalid email format").optional().isEmail(),
        check("password", "password is required").optional().notEmpty(),
        check("password", "password is too short").optional().isLength({ min: 5 }),
        check("password", "password is too long").optional().isLength({ max: 50 }),
        check("role", "invalid role").optional().isLength({ min: 24, max: 24 }),
        (req, res, next) => {
            try {
                validationResult(req).throw();
                const { body } = req;
                const { password } = body;
                if (password) req.body.password = bcryt.hashSync(password, 10);
                return next();
            } catch (error) {
                const errors = error.array().map((errorAux) => {
                    return { param: errorAux.param, msg: errorAux.msg };
                });
                res.status(400).json({ errors });
            }
        },
    ];
};

const validateDeleteUserById = () => {
    return [
        param("idUser", "Invalid id product must be a string").not().isNumeric(),
        param("idUser", "Invalid id product").isLength({ min: 24, max: 24 }),
        (req, res, next) => {
            try {
                validationResult(req).throw();
                return next();
            } catch (error) {
                const errors = error.array().map((errorAux) => {
                    return { param: errorAux.param, msg: errorAux.msg };
                });
                res.status(400).json({ errors });
            }
        },
    ];
};

module.exports = {
    validateAddNewUser,
    validateGetUserById,
    validateUpdateUserById,
    validateDeleteUserById,
};
