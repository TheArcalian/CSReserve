const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/elig0-answer', function (req, res) {
  var elig0answer = req.session.data['wales']
  if (elig0answer == "yes"){
      res.redirect('/RR-006')
  }
  if (elig0answer == "no"){
      res.redirect('/RR-004a')
  }
})

// Add your routes here - above the module.exports line
router.post('/elig1-answer', function (req, res) {
  var elig1answer = req.session.data['current-former']
  if (elig1answer == "other"){
      res.redirect('/RR-004a')
  }
  if (elig1answer == "Former"){
      res.redirect('/RR-007a')
  } else {
        res.redirect('/RR-007')
  }
})

router.post('/elig2-answer', function (req, res) {
  var elig2answer = req.session.data['Manager-ask']
  if (elig2answer == "No"){
      res.redirect('/RR-004b')
  } else {
        res.redirect('/RR-009')
  }
})

router.post('/elig3-answer', function (req, res) {
  var elig3answer = req.session.data['current-last-grade']
  if (elig3answer == "None of the above"){
      res.redirect('/RR-004c')
  } else {
        res.redirect('/RR-010')
  }
})

router.post('/elig4-answer', function (req, res) {
  var elig4answer = req.session.data['current-last-role']
  if (elig4answer == "None of the above"){
      res.redirect('/RR-004d')
  } else {
        res.redirect('/RR-011')
  }
})

router.post('/elig5-answer', function (req, res) {
  var elig5answer = req.session.data['nation']
  if (elig5answer == "No"){
      res.redirect('/RR-004e')
  } else {
        res.redirect('/RR-007b')
  }
})

router.post('/who-answer', function (req, res) {
  var typeofroleans = req.session.data['current-former']
  if (typeofroleans == "Current"){
      res.redirect('/RR-014')
  } else {
        res.redirect('/RR-015')
  }
})

router.post('/RU-010-answer', function (req, res) {
  var typeofroleans = req.session.data['current-former-role-update']
  if (typeofroleans == "Yes"){
      res.redirect('/RU-011')
  } else {
        res.redirect('/RU-012')
  }
})

router.post('/typeofrole-answer', function (req, res) {
  var typeofroleans = req.session.data['current-former-role']
  if (typeofroleans == "Yes"){
      res.redirect('/RR-014')
  } else {
        res.redirect('/RR-015')
  }
})

module.exports = router
