const majorsRouter = require("express").Router();
//PipeLines
const { majorsPipeLines } = require("../pipes");
const { pipeLineAddNewMajor, pipeLineGetAllMajors } = majorsPipeLines;

majorsRouter.post("/majors", pipeLineAddNewMajor());
majorsRouter.get("/majors", pipeLineGetAllMajors());

module.exports = majorsRouter;
