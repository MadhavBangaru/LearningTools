const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please check name"]
    },
    rating: {
        type:Number,
        min:1,
        max:10
    },
    review: String
}); 

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    
    rating:5,
    review:"Peaches from georgia fruit"
})

const peopleSchema = new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit: fruitSchema

});

const Person = mongoose.model("Person",peopleSchema);



const pineapple= new Fruit({
    name:"Pineapple",
    rating:8,
    review:"how u doing"
})

const kiwi = new Fruit({
    name:"Kiwi",
    rating:10,
    review:"Best Fruit"

})

const strawberry = new Fruit({
    name:"Strawberry",
    rating:10,
    review:"Tasty one"

})

strawberry.save()

const orange = new Fruit({
    name:"Orange",
    rating:6,
    review:"2nd Best Fruit"

})

const banana = new Fruit({
    name:"Banana",
    rating:6,
    review:"3rd Best Fruit"

})

const person= new Person({
    name:"Amy",
    age:36,
    favouriteFruit:pineapple
})
//pineapple.save()
//person.save();
 

// Fruit.insertMany([kiwi,orange,banana],function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Succesfully saved all fruits!")
//     }
// });

// Fruit.find(function(err,fruits){
//     if(err){
//         console.log(err);
//     }else{

//         //mongoose.connection.close();
//         fruits.forEach(fruit => {
//             console.log(fruit.name)
//         });
//         //console.log(fruits);
//     }
// })

// Fruit.deleteOne({ name: "Peach"},(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Succesfully deleted")
//     }

// } ); 

// Fruit.updateOne({_id:"61a20fd9451768dfd47ad032"},{name:"Peach"},(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Succesfully updated the doc")
//     }
// })

Person.updateOne({_id:"61a12ac6e71b6b3dbe635e50"},{favouriteFruit:strawberry},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Succesfully updated the persons doc")
    }
})








  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruits)
      callback(fruits);
    });
  }