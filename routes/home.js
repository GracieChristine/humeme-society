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



router.delete('/user/:id', (req, res, next) => {
  console.log(req.params.id, 'hhhdhhdhdhdhdh');
  deleteUser(req.params.id)
    .then((data) => {
      console.log(data);
      res.sendStatus(200)
    })
})

router.delete('/post/:id', (req, res, next) => {
  console.log('LITTT');
  Promise.all()
  deletePost(req.params.id)
    .then((data) => {
      console.log(data)
      return readAllBlogPosts()
    })
    .then((blogs) => {
      res.render('home', {
        title: 'HOMEPAGE',
        username: req.params.username,
        blogData: blogs
      })
    })


})

router.post('/:username', (req, res, next) => {
  readUser(req.body.name)
    .then(data => {
      return data[0].id;
    })
    .then((userID) => {
      addPost(req.body.title, req.body.text, userID)
        .then((data) => {
          console.log(data);
          res.redirect(req.get('referer'));
        })
    })
})

let readAllBlogPosts = () => knex('posts').select().orderBy('added_at', 'desc')
let deleteUser = (name) => knex('users').returning('*').where('name', name).del()
let deletePost = (id) => knex('posts').returning('*').where('id', id).del()
let readUser = (name) => knex('users').where('name', name).select('id')
let addPost = (title, text, user_id) => knex('posts').returning('*').insert({
  'title': title,
  'text': text,
  'user_id': user_id,
  added_at: new Date()
})
module.exports = router;
