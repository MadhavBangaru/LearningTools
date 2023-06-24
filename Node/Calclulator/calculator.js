const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post("/",(req,res)=>{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sum= num1+num2;
    res.send("The result is "+sum);
})

app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html");
})
app.post("/bmicalculator",(req,res)=>{
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var BMI = (weight)/(height*height);

    res.send("Your BMI is "+Math.floor(BMI));
})
app.listen(8080,()=>{
    console.log("Listening on port 8080")
})