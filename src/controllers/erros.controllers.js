const { ErrorsSchema } = require("../schemas");

const logError = async (req, res) => {
    try {
        const errorObject = req.errorLog;
        const errorLog = new ErrorsSchema(errorObject);
        await errorLog.save();
        res.status(500).json({ msg: errorLog.message });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error.message });
    }
};

const getAllErrors = async () => {
    try {
    } catch (error) {}
};

module.exports = {
    logError,
    getAllErrors,
};
