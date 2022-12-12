const multer = require("multer");
const { v4 } = require("uuid");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (__req, __file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (__req, file, cb) {
        cb(null, `${v4()}_${file.originalname}`);
    },
});

const fileFilter = (__req, file, cb) => {
    const { mimetype } = file;
    const types = ["image/jpeg", "image/png", "application/pdf", "application/octet-stream"];
    const validType = types.includes(mimetype);
    validType ? cb(null, true) : cb({ mg: "Unsupported file format" });
};

const upload = multer({
    storage,
    limits: { fileSize: 1204 * 1204 },
    fileFilter,
});

const saveLocalFilesStudent = upload.single("image");

const saveLocalFilesCompany = upload.single("image");

const deleteLocalFilesStudent = (req, res, next) => {
    try {
        const { file } = req;
        fs.unlinkSync(file.path);
        next();
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const deleteLocalFilesCompany = (req, res, next) => {
    try {
        const { file } = req;
        fs.unlinkSync(file.path);
        next();
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

module.exports = {
    upload,
    saveLocalFilesStudent,
    saveLocalFilesCompany,
    deleteLocalFilesStudent,
    deleteLocalFilesCompany,
};