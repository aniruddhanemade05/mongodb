const mongoose = require('mongoose');
 const obj = {
    Name : String,
    Age : Number
 }
 module.exports = mongoose.model("Employee",obj)