const express = require('express');
const app = express()
const port = 8080

app.get('/',(req,res)=>{
    res.send("<h1>Hello world. This is some extra line</h1>")
})

app.get("/contact",(req,res)=>{
    res.send("You are on contact page");
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})