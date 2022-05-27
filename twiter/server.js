const express=require("express")
const app=express()
const User=require("./src/model/usermodel")
const Tweet=require("./src/model/tweetsmodel")

app.get("/:id",async(req,res)=>{
    try {
        let user=await User.find().lean().exec()
    return res.status(200).send(user)
    } catch (err) {
        console.log(err)
    }
})
app.post("",(async(req,res)=>{
    try {
        const user=await Tweet.create(req.body)
        return res.status(201).send(user) 
    } catch (err) {
        return res.status(500).send(err.message)
    }
}))

app.get("/:id",async(req,res)=>{
    try {
        let tweet=await Tweet.find().lean().exec()
    return res.status(200).send(tweet)
    } catch (err) {
        console.log(err)
    }
})
app.post("",(async(req,res)=>{
    try {
        const tweet=await Tweet.create(req.body)
        return res.status(201).send(tweet) 
    } catch (err) {
        return res.status(500).send(err.message)
    }
}))





app.listen("3000",(req,res)=>{
    console.log("I am in port no 3000")
})