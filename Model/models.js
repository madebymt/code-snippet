//// this is post models ////

const mongoose = require("mongoose")
const newCodeSchema = new mongoose.Schema({
  id: String,
  Title: String,
  Language: String,
  Code: String,
  Tag: String,
})

const users = mongoose.model("users", newCodeSchema)
// create a model using that schema

// export the stuff
module.exports = users
