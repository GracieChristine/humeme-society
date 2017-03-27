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
  checkUsername(username).then((data) => {
    console.log('this is data', data.length);
    if (data.length || !username) {
      res.sendStatus(400)
    } else {
      insertIntoUsers(username)
        .then((iData) => {
          console.log('heehehehheheheh');
          res.redirect('home')
        })
      // res.redirect('home')
    }
  })



});
let checkUsername = (username) =>
  knex('users').where('name', username)

let insertIntoUsers = (username) => knex('users').insert({
  name: username
})

module.exports = router;
