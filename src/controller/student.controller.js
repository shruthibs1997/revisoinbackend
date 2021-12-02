const express = require("express");
const Student = require("../model/student.model");
const router = express.Router();

router.post("/",async function(req,res){
    console.log(req.body)
    try{
        const student = await Student.create(req.body);
        return res.send(student)

    }catch(err){
        return res.send("error post")
    }
})

router.get("/",async function(req,res){
    try{
        const student = await Student.find().lean().exec();
        return res.status(200).json({student:student})

    }catch(err){
        return res.send("error")
    }
})

router.delete("/:id",async function(req,res){
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        return res.status(200).json({student:student})

    }catch(err){
        return res.send("error")
    }
})


module.exports=router;