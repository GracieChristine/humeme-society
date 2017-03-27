var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'HOMEPAGE'
  })
});
router.get('/:username', function(req, res, next) {
  res.render('home', {
    title: 'HOMEPAGE',
    username: req.params.username
  })
});
module.exports = router;
