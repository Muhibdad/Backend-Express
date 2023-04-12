const express =require("express");

const app=express();

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello from serverside",app:"natours"});
})


app.listen(3000,()=>{
    console.log("App running on port 3000");
})