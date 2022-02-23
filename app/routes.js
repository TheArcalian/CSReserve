const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/elig1-answer', function (req, res) {
  var elig1answer = req.session.data['current-former']
  if (elig1answer == "other"){
      res.redirect('/Unelig1')
  }
  if (elig1answer == "Former"){
      res.redirect('/Elig2a')
  } else {
        res.redirect('/Elig2')
  }
})

router.post('/elig2-answer', function (req, res) {
  var elig2answer = req.session.data['Manager-ask']
  if (elig2answer == "No"){
      res.redirect('/Unelig2')
  } else {
        res.redirect('/Elig3')
  }
})


router.post('/elig3-answer', function (req, res) {
  var elig3answer = req.session.data['current-last-grade']
  if (elig3answer == "None of the above"){
      res.redirect('/Unelig3')
  } else {
        res.redirect('/Elig4')
  }
})

router.post('/elig4-answer', function (req, res) {
  var elig4answer = req.session.data['current-last-role']
  if (elig4answer == "None of the above"){
      res.redirect('/Unelig4')
  } else {
        res.redirect('/Elig5')
  }
})

router.post('/elig5-answer', function (req, res) {
  var elig5answer = req.session.data['nation']
  if (elig5answer == "No"){
      res.redirect('/Unelig5')
  } else {
        res.redirect('/proceed1')
  }
})

router.post('/who-answer', function (req, res) {
  var typeofroleans = req.session.data['current-former']
  if (typeofroleans == "Current"){
      res.redirect('/recentcivil')
  } else {
        res.redirect('/notrecentcivil')
  }
})

router.post('/typeofroleupdate-answer', function (req, res) {
  var typeofroleans = req.session.data['current-former-role-update']
  if (typeofroleans == "Yes"){
      res.redirect('/recentcivilupdate')
  } else {
        res.redirect('/notrecentcivilupdate')
  }
})

router.post('/typeofrole-answer', function (req, res) {
  var typeofroleans = req.session.data['current-former-role']
  if (typeofroleans == "Yes"){
      res.redirect('/recentcivil')
  } else {
        res.redirect('/notrecentcivil')
  }
})

module.exports = router
