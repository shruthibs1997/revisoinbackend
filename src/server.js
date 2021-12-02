const express = require("express");
const connect=require("./config/db")
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors())

const studentController=require("./controller/student.controller");
const contestController = require("./controller/contest.controller")

app.use("/students",studentController)
app.use("/contests",contestController)


app.listen(3033,async()=>{
    await connect();
    console.log("hi")
})