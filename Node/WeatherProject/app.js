const express = require('express')
const https = require('https')
const bodyParser =require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/",(req,res)=>{
    //res.send("Post req recieved")

    console.log(req.body.city);
    const query =req.body.city
    const apiid ="ca25d056706726738fb1217389acfae9"
    const unit ="metric"
    const url ="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiid+"&units="+unit;
    https.get(url,(response)=>{
        console.log(response.statusCode);
        response.on("data",(data)=>{
            const weather_data=JSON.parse(data);
            //console.log(weather_data);
            const temperature = weather_data.main.temp;
            const description = weather_data.weather[0].description;
            const pressure = weather_data.main.pressure;
            const icon = weather_data.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+icon+"@4x.png"

            res.write("<p>The pressure is "+pressure+"</p>")
            res.write("<h1>The temperature is "+temperature+" and it's probably "+description+"</h1>");
            res.write("<img src='"+imageURL+"'>")
            res.send()
        })
    })
})


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})