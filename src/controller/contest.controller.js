const express =require("express");
const Contest = require("../model/contest.model");
const router = express.Router();

router.post("/",async function(req,res){
    try{
        const contest = await Contest.create(req.body);
        return res.status(200).send(contest);
    }catch(err){
        return res.send("error")
    }
})

router.get("/",async function(req,res){
    const page=+req.query.page || 1
    const size = +req.query.limit ||5
    
    const offset = (page-1)* size;


    try{
        const contest = await Contest.find().skip(offset).limit(size).lean().exec();
        // const totalPages= Math.ceil((await User.find().countDocuments())/size)
        // console.log(totalPages,size,page);
        return res.status(200).json({contest:contest});
    }catch(err){
        return res.send("error")
    }
})

module.exports=router;