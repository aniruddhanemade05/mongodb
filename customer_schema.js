const mongoose = require('mongoose')
 const obj = {
    Name : String,
    Age : Number,
    Address: String
 }
 module.exports = mongoose.model("customer",obj)