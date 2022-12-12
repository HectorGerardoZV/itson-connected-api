const profilesRouter = require("express").Router();
//PipeLines
const { profilesPipeLines } = require("../pipes");
const {
    pipeLineAddProfileCompany,
    pipeLineAddProfileStudent,
    pipeLineGetProfilesStudent,
    pipeLineGetProfilesCompany,
    pipeLineGetAllProfiles,
    pipeLineGetProfileById,
} = profilesPipeLines;

profilesRouter.post("/profiles/student", pipeLineAddProfileStudent());
profilesRouter.post("/profiles/company", pipeLineAddProfileCompany());
profilesRouter.get("/profiles/student", pipeLineGetProfilesStudent());
profilesRouter.get("/profiles/company", pipeLineGetProfilesCompany());
profilesRouter.get("/profiles", pipeLineGetAllProfiles());
profilesRouter.get("/profiles/:id", pipeLineGetProfileById());
module.exports = profilesRouter;