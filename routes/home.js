var express = require('express');
var router = express.Router();
const knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'HOMEPAGE'
  })
});
router.get('/:username', function(req, res, next) {
  let blogs = {}
  readAllBlogPosts()
    .then(data => {
      blogs = data;
      res.render('home', {
        title: 'HOMEPAGE',
        username: req.params.username,
        blogData: blogs
      })
    })

});

let readAllBlogPosts = () => knex('posts').select()
module.exports = router;
