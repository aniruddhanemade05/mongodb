const mongoose = require('mongoose');
const model = require('./emp_schema')
mongoose.connect('mongodb://localhost/PWSKILLS')
const db = mongoose.connection;
db.once('open', () => {
    console.log("Connected successfully")
    // init();
    // fetch();
    deld();
})
db.on("error", () => {
    console.log("error while connecting dbs:");
})
async function init() {
    const obj = {
        Name: "Aniruddha",
        Age: 18
    }
    try {
        const user = await model.create(obj);
        console.log("Employee created :", user)
    }
    catch (error) {
        console.log('error is :', error)
    }
}
//fetch 
async function fetch() {
    const user = await model.find({ Name: "Aniruddha" })
    console.log(user)
}
//delete collection 
async function del() {
    const userrec = await model.collection.drop()
    console.log(userrec)
}
async function deld() {
    try {
        await db.dropDatabase();
        console.log("Database dropped successfully");
    } catch (error) {
        console.log("Error while dropping the database:", error);
    }
}

