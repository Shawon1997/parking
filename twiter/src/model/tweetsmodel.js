const { text } = require("express")
const mongoose=require("mongoose")
const Schema=mongoose.Schema

const tweetSchema= new Schema({
    user_id:{type:String,required:true},
    content:{type:String,required:true}
}, {
    timeseries: true,
    versionKey: false
}
)

const User=mongoose.model("tweet",tweetSchema)
module.exports=User