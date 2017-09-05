const express = require("express")
const router = express.Router()
const Models = require ("../Model/user")
// router.get("/registration", function(req, res) {
//   res.render("register")
// })



router.post("/registration", function(req, res) {
  Models.findOne({ _id: req.params.id }).then(function(user) {
      const username = req.body.username
      const password = req.body.password
      console.log(username)

      const users = new Models()
      users.username = username
      users.password = password

    user
      .save() //update, create or change
      .then(function(user) {
        res.redirect("/")
      })
      .catch(function(error) {
        res.render("login", {
          user: user,
          errors: error.errors
        })
      })
  })
})


router.post("/registration", function(req, res) {
  const username = req.body.username
  const password = req.body.password

  console.log(username)
  const user = new Models()
  user.username = username
  user.password = password

  user
    .save()
    .then(function(user) {
      req.session.user = user
      res.redirect("/")
    })
    .catch(function(e) {
      res.render("register", {
        user: user,
        errors: e.errors
      })
    })
})

module.exports = router
