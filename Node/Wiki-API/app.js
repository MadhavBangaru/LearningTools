const express = require('express')

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ejs = require('ejs')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')
app.use(express.static("public"))
mongoose.connect('mongodb://localhost:27017/wikiDB');

const articleSchema ={
    title:String,
    content:String
};

const Article = mongoose.model("Article",articleSchema);

//////////////////////////// REQUESTS TARGETING ALL ARTICLES ///////////

app.route("/articles")
.get((req,res)=>{
    Article.find({},(err,foundArticles)=>{
        if(err){
            res.send(err)
        }
        else{
        res.send(foundArticles);
        }
    })
})

.post((req,res)=>{
    
    const newArticle = new Article({
        title:req.body.title,
        content:req.body.content
    });

    newArticle.save(err=>{
        if(err){
            res.send(err);
        }else{
            res.send("Succesfully added new article");
        }
    });
})

.delete((req,res)=>{
    Article.deleteMany((err)=>{
        if(!err){
            res.send("Succesfully delete all articles")
        }else{
            res.send(err);
        }
    })
});


////////////////////REQUESTS TARGETING SPECIFIC ARTICLES /////////////

app.route("/articles/:articleTitle")
.get((req,res)=>{
    //var title = req.params.articleTitle;

    Article.find({title:req.params.articleTitle},(err,foundArticle)=>{
        if(!err){
            res.send(foundArticle)
        }else{
            res.send("No articles found")
        }
    })
})

.put((req,res)=>{
    Article.updateOne(
        {title:req.params.articleTitle},
        {title:req.body.title,content:req.body.content},
        (err)=>{
            if(!err){
                res.send("Succesfully updated article")
            }else{
                res.send(err)
            }
        }
        )
})
.patch((req,res)=>{
    Article.updateOne(
        {title:req.params.articleTitle},
        {$set :req.body},
        (err)=>{
            if(!err){
                res.send("Succesfully updated the article")
            }else{
                res.send(err)
            }
        }
    )
})

.delete((req,res)=>{
    Article.deleteOne({title:articleTitle},(err)=>{
        if(!err){
            res.send("Succesfuly deleted the article")
        }else{
            res.send(err)
        }
    })
})

app.listen(8080,()=>{
    console.log("Listening on port 8080")
})