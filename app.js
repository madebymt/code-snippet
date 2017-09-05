const express = require("express")
const MongoClient = require("mongodb")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
const mustache = require("mustache-express")
const Model = ("./models/models")
const session = require("express-session")
const mongoose = require("mongoose")
mongoose.Promise = require("bluebird")
const MONGO_URL = "mongodb://127.0.0.1:27017/code"
const codeRouter = require("./routes/router")
const registerRouter = require("./routes/register")
mongoose.connect(MONGO_URL);
//
// app.use(function(req,res,next){
//     req.db = db;
//     next();
// });

app.use(codeRouter)
app.use(registerRouter)

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use( express.static('public'))

let sess = {
    secret: "key",
    cookie: {},
    saveUninitialized: true,
    resave:true,
    store: mongoose-session(mongoose)
}

app.use(session(sess))

app.listen(3000, function(){
console.log("Here's new node app")
})
