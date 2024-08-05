const express=require('express');
const app=express();
const path=require('path');
const {name}=require('ejs');
const port=8081;



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,'public/css')));
app.use(express.static(path.join(__dirname,"public/js")));

app.get("/id/:username",(req,res)=>{
    const {username}=req.params;
    const server=require("./data.json");
   
    const data=server[username];
    res.render("profile.ejs",{data});
})

app.get("/profile",(req,res)=>{
    res.render("profile.ejs");
})





app.listen(port,()=>{
    console.log('listening on port:',port);
})