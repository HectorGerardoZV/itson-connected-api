const cloudinary = require("cloudinary").v2;
require("dotenv").config({ path: ".env" });

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});
const folder = process.env.CLOUD_FOLDER;
const images = process.env.CLOUD_FOLDER_IMAGES;

const uploadFilesStudentCloud = async (req, __res, next) => {
    try {
        const { file } = req;
        const newImage = await cloudinary.uploader.upload(file.path, {
            folder: `${folder}/${images}`,
        });
        req.body.image = newImage.secure_url;
        next();
    } catch (error) {
        console.log(error);
    }
};
const uploadFilesCompanyCloud = async (req, __res, next) => {
    try {
        const { file } = req;
        const newImage = await cloudinary.uploader.upload(file.path, {
            folder: `${folder}/${images}`,
        });
        req.body.image = newImage.secure_url;
        next();
    } catch (error) {
        console.log(error);
    }
};
const deleteImageCloud = async (req, res, next) => {
    try {
    } catch (error) { }
};

module.exports = {
    uploadFilesStudentCloud,
    uploadFilesCompanyCloud,
    deleteImageCloud,
};