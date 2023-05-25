const express= require("express");
const app= express();
const User=require("./models/user")
const Blog=require("./models/blog")
const cors=require('cors');
const mongoose=require("mongoose");
app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(express.json())
const cookieparser=require('cookie-parser');
app.use(cookieparser());
const key="no key lmao";
const jwt=require('jsonwebtoken');
// app.use(jwt());
mongoose.connect("mongodb+srv://bhargav2650:bhargav2652@cluster0.def7dvh.mongodb.net/?retryWrites=true&w=majority")
app.post("/Register",async(req,res)=>{
    // res.json('hello');
    const {username,password}=req.body;
    try{
    const userdoc=await User.create({username,password});
    console.log(userdoc);
    res.send("hello");
    }
    catch(e){
        console.log(e);
        res.status(400).json(e);
    }
    // console.log(username, password);
})
app.post("/Login",async(req,res)=>{
    // res.json('hello');
    const {username,password}=req.body;
    try{
    const userdoc=await User.findOne({username});
    console.log(userdoc);
    if(password==userdoc.password)
    {
        // res.json("successful login");
        jwt.sign({username,id:userdoc._id},key,{},(err,token)=>{
            if(err) throw err;
            console.log(token);
            res.cookie('token',token).json({
                id:userdoc._id,
                username,
            });
            console.log("hi");
        });
        // res.json("ok")
    }
    else
    {
        res.status(400).json("bad");
    }
    }
    catch(e){
        console.log(e);
        res.status(400).json(e);
    }
    // console.log(username, password);
})
// app.post("/Login",(req,res)=>{
//     res.json('test ok');
// })
app.get('/profile',(req,res)=>
{
    // console.log("hi");
    const {token} =req.cookies;
    console.log(token);
    jwt.verify(token,key,{},(err,info)=>{
        if(err) throw err;
        res.json(info);
    })
})
app.post('/Update/:id',async(req,res)=>{
    const {title1,id1, description1}=req.body;
    try{
        console.log(req.body);
        await Blog.updateOne({id:req.body.id}, {$set:{title:req.body.title,description:req.body.description}});
        // console.log(postdoc);
        res.send("hello");
        }
        catch(e){
            console.log(e);
            res.status(400).json(e);
        }
})
app.post('/create',async(req,res)=>
{
    const {title,id, description, likes}=req.body;
    try{
    const postdoc=await Blog.create({title,id, description, likes});
    console.log(postdoc);
    res.send("hello");
    }
    catch(e){
        console.log(e);
        res.status(400).json(e);
    }
})
app.get('/View',async(req,res)=>
{
    // const {title, description, likes}=req.body;
    try{
    const postdoc=await Blog.find();
    console.log(postdoc);
    res.json(postdoc);
    }
    catch(e){
        console.log(e);
        res.status(400).json(e);
    }
})
app.get('/View/:id',async(req,res)=>
{
    // const {title, description, likes}=req.body;
    try{
    const postdoc=await Blog.findOne({id:parseInt(req.params.id)});
    console.log(postdoc);
    res.json(postdoc);
    }
    catch(e){
        console.log(e);
        res.status(400).json(e);
    }
})
app.get('/Delete/:id',async(req,res)=>
{
    // const {title, description, likes}=req.body;
    try{
await Blog.deleteOne({id:parseInt(req.params.id)});
    }
    catch(e){
        console.log(e);
        res.status(400).json(e);
    }
})
app.post('/logout',(req,res)=>{
    res.cookie('token','').json("ok");
})
app.listen(5000);

//mongodb+srv://bhargav2650:<bhargav2652>@cluster0.def7dvh.mongodb.net/?retryWrites=true&w=majority