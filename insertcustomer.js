const mongoose = require('mongoose');
const model = require('./customer_schema')
mongoose.connect('mongodb://localhost/shop')
const db = mongoose.connection;
db.once('open', () => {
    console.log('connected successfully')
    // init()
    // fetch()
    // udatecustomer()
    remove()
})
db.on('error', () => {
    console.log("Some eror is while connecting dbs")
})
async function init() {
    let user_obj = {
        Name: "john",
        Age: 33
    }
    try {
        const user = await model.create(user_obj)
        console.log("customer is :", user)
    }
    catch (error) {
        console.log('error is :', error)
    }
}
async function fetch() {
    const fetch_custome = await model.find({ Name: 'john' })
    console.log(fetch_custome);
}
async function udatecustomer() {
    const fetch_custome = await model.findOne({ Name: 'john' })
    fetch_custome.Address = "hillside phase 2, pune"
    const user = await fetch_custome.save()
    console.log(user)
}
async function remove() {
    const userrec = await model.deleteOne({ Name: 'john' })
    console.log(userrec)
}