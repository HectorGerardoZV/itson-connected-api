const authRouter = require('express').Router();


authRouter.post('/auth',(req,res)=>{
    res.json({msg: "Login"})
})

authRouter.get('/auth',(req,res)=>{
    res.json({msg: "Check"})
})


module.exports = authRouter;