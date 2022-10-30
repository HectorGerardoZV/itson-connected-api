const majorsRouter = require("express").Router();
//PipeLines
const { majorsPipeLines } = require("../pipes");
const {
    pipeLineAddNewMajor,
    pipeLineGetAllMajors,
    pipeLineGetMajorById,
    pipeLineUpdateMajorById,
    pipeLineDeleteMajorById,
} = majorsPipeLines;

majorsRouter.post("/majors", pipeLineAddNewMajor());
majorsRouter.get("/majors", pipeLineGetAllMajors());
majorsRouter.get("/majors/:id", pipeLineGetMajorById());
majorsRouter.put("/majors/:id", pipeLineUpdateMajorById());
majorsRouter.delete("/majors/:id", pipeLineDeleteMajorById());

module.exports = majorsRouter;
