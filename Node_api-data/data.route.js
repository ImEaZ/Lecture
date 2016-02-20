;(function () {
  'use strict'
  var express = require('express')
  var router = express.Router()
  var Dictory = []

  router.get('/api/data' , function (req , res ,next){
     res.send(Dictory)
  })
  router.post('/api/data', function (req, res, next) {
    console.log (req.body)
    Dictory.push(req.body)
  })
  module.exports = router
})()
