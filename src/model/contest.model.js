const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
    titel:{type:String,required:true},
    type:{type:String,required:true},
    deadline:{type:String,required:true},
    tags:{type:String,required:true},
    time:{type:String,required:true}
})

const Contest = mongoose.model("contest",contestSchema);

module.exports=Contest;