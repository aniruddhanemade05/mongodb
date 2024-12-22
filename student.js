const mongoose = require('mongoose');
const model = require('./school_schema')

mongoose.connect('mongodb://localhost/schoolIDB')
const db = mongoose.connection
db.once('open', () => {
    console.log('db created successfully');
    init()
})
db.on('error', () => {
    console.log('error while connecting DBS')
})
async function init() {
    const stu_obj = {
        Name: 'John',
        Age: 13,
        Grade: "A"
    }
    try {
        let data = await model.create(stu_obj)
        console.log(data)
    }
    catch(error){
        console.log('error is:',error)
    }
}