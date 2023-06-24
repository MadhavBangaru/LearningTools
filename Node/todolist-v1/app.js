const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const _ =require('lodash')
// const date = require(__dirname+"/date.js")


const app = express()

// const items=["Buy Food","Cook Food","Eat Food"];
// const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

mongoose.connect("mongodb://localhost:27017/todolistDB")

const itemsSchema = new mongoose.Schema({
    name:String
})

const listSchema = {
    name:String,
    items:[itemsSchema]
}

const Item = mongoose.model("Item",itemsSchema)

const List = mongoose.model("List",listSchema)

const buyFood = new Item({
    name:"Buy Food"
})
const cookFood = new Item({
    name:"Cook Food"
})
const eatFood = new Item({
    name:"Eat Food"
})

const defaultItems = [buyFood,cookFood,eatFood];

app.get("/",(req,res)=>{
    
    // let day = date.getDate();
    Item.find({},(err,foundItems)=>{
        if(foundItems.length ===0){
            Item.insertMany(defaultItems,(err)=>{
                if(err){
                console.log(err);
                }else{
                console.log("Successfully default items to DB")
                }
            })
            res.redirect("/");
        }else{
            res.render("list",{listTitle: "Today",newListItem:foundItems})
        }
    })
})

app.get("/:customListName",(req,res)=>{
    const customListName = _.capitalize(req.params.customListName);
    List.findOne({ name:customListName},(err,foundList)=>{
        if(!err){
            if(!foundList){
                //create a new list
                const list = new List({
                    name:customListName,
                    items: defaultItems
                })
                list.save();
                res.redirect("/"+customListName)
            }else{
                //show an existing list
                res.render("list",{listTitle:foundList.name,newListItem:foundList.items })
            }
        }else{
            console.log(err);
        }
    })
    
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.post("/",(req,res)=>{
    const itemName = req.body.newItem;
    const listName = req.body.list;

    const item = new Item({
        name:itemName
    })
    if(listName ==="Today"){
        item.save()
        res.redirect("/");
    }else{
        List.findOne({name:listName},(err,foundList)=>{
            foundList.items.push(item);
            foundList.save();
            res.redirect("/"+listName)
        })
    }
})

app.post("/delete",(req,res)=>{
    const checkedItemId = req.body.checkbox;
    const listName = req.body.listName;

    if(listName==="Today"){
        Item.findByIdAndRemove(checkedItemId,(err)=>{
            if(!err){
                console.log("Succesfully deleted checked item")
            }
            res.redirect("/")
        })
    }else{
        List.findOneAndUpdate({name:listName},{$pull:{items:{_id:checkedItemId}}},(err,foundList)=>{
            if(!err){
                res.redirect("/"+listName)
            }
        })
    }
    

})
app.listen(3000,()=>{
    console.log("Listening on port 3000")
})