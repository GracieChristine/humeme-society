var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const knex = require('../knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {
    title: 'Humeme Society'
  });
});

router.post('/', function(req, res, next) {
  let username = req.body.username

  if (!username) {
    res.sendStatus(400)
  }


});

module.exports = router;
