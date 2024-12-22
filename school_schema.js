const mongoose = require('mongoose')
const stu = {
    Name:String,
    Age:Number,
    Grade : String
}
module.exports = mongoose.model('student',stu)