
// This .js is only for highlight purposes

// Inserting data in mongoDb
use SumanData

// items = collection in mongodb (R-DBMS)
// insertOne function for inserting one document 
// items = collection in mongodb (R-DBMS)
// insertOne function for inserting one document 
db.items.insertOne({"name":"HP Pavilion", Price: 60000, Rating: 4.9, Sold: 98})
// items = collection in mongodb (R-DBMS)
// insertOne function for inserting one document 

// Find or show the data
db.items.find() //find() is a function

// insertMany function for inserting many document
db.items.insertMany([{name:"HP Pavilion", Price: 60000, Rating: 4.9, Sold: 98}, {name:"Dell Inspiron", Price: 30000, Rating: 4.0, Sold: 88}, {name:"Lenovo Ideapad", Price: 28000, Rating: 3.5, Sold: 68}])





[
    {
      _id: ObjectId("6304748f02795e42d9eea400"),
      name: 'HP Pavilion',
      Price: 60000,
      Rating: 4.9,
      Sold: 98
    },
    {
      _id: ObjectId("6304786ec844e8a88796458c"),
      name: 'HP Pavilion',
      Price: 60000,
      Rating: 4.9,
      Sold: 98
    },
    {
      _id: ObjectId("6304786ec844e8a88796458d"),
      name: 'Dell Inspiron',
      Price: 30000,
  SumanData>
      Sold: 88
    },
    {
      _id: ObjectId("6304786ec844e8a88796458e"),
      name: 'Lenovo Ideapad',
      Price: 28000,
      Rating: 3.5,
      Sold: 68
    }
  ]












//Searching for data in mongodb
db.items.find({Price:28000})
db.items.find({Rating:{$gte: 3.5}})//Find the element Grater than 3.5
db.items.find({Rating:{$lte: 3.5}})//Find the element less than 3.5
//And Operater
db.items.find({Rating:{$gt: 3.5}, Price:{$gt:50000}}) //filter (Range)
db.items.find({Rating:{$lt: 3.5}, Price:{$lt:50000}}) //filter (Range) 

// "or" operater use 
db.items.find({
    $or:[{Rating:{$gt: 3.5}, Price:{$gt:50000}}]
})

// only prametre filter
db.items.find({Rating:{$gt:3.5}}, {Rating:1})

//Delete Items
db.items.deleteOne({Price:28000})
db.items.deleteMany({Price:28000})

// database update value
db.items.find()
db.items.updateOne({name: "HP Pavilion"}, {$set: {Price: 65000}})
db.items.find()

//many item
db.items.find()
db.items.updateMany({name: "HP Pavilion"}, {$set: {Price: 65000, Rating: 2.2}})
db.items.find()