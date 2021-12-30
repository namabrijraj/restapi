const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/company")
.then( () => console.log("Connetec to DB"))
.catch( (err) => console.log(err) )