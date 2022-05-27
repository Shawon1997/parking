const mongoose=require("mongoose")
const Schema=mongoose.Schema
const twiterSchema=new Schema({
    id:{type:String, required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,length:8,required:true}
}, {
    timeseries: true,
    versionKey: false
}
);

const User=mongoose.model("user",twiterSchema)
module.exports=User