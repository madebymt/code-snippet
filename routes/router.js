const express = require("express")
const router = express.Router()
const Models = require ("../Model/models")


router.get("/", function(req, res) {
    Models.find()
    .then(function(addcode) {
    res.render("index",{
        addcode:addcode
    })
    })
})

router.get("/login", function(req, res){
  res.render("login")
})

router.get("/register", function(req, res){
  res.render("register")
})

router.get("/post", function(req, res){
  res.render("post")
})

router.get("/addcode/post", function(req, res) {
  res.render("post")
})


router.post("/addcode", function (req, res){
  Models.findOne({ _id: req.params.id })
  .then(function(users) {

  const newpost = new Models()
  newpost.title = req.body.title
  newpost.language = req.body.language
  newpost.code = req.body.code
  newpost.tag = req.body.tag

  newpost
    .save()
    .then(function(users) {
      res.redirect("/")
    })
    .catch(function(error) {
    //   console.log("error", error)
      res.render("detail", {
        newpost: newpost,
        errors: error.errors
      })
    })
  })
})

router.post("/addcode/:id", function(req, res) {
  Models.findOne({ _id: req.params.id })
  .then(function(users) {

      const newpost = new Models()
      newpost.title = req.body.title
      newpost.language = req.body.language
      newpost.code = req.body.code
      newpost.tag = req.body.tag

      newpost
      .save() //update, create or change
      .then(function(users) {
        res.redirect("/")
      })
      .catch(function(error) {
        res.render("edit", {
          users: users,
          errors: error.errors
        })
      })
  })
})


//// i just edit here /////
router.get("/addcode/:id", function(req, res) {
 Models.findOne({ _id: req.params.id })
  .then(function(users) {
    res.render("detail", {
     users: users
    })
  })
})

router.get("/addcode/:id/edit", function(req, res) {
  Models.findOne({ _id: req.params.id })
  .then(function(users) {
    res.render("edit", {
      users: users
    })
  })
})

router.get("/addcode/:id/delete", function(req, res) {
  Models.deleteOne({ _id: req.params.id }).then(function() {
    res.redirect("/")
  })
})

module.exports = router
