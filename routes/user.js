var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user/home')
});
router.get('/about', function(req, res, next) {
  res.render('user/about')
});
router.get('/services', function(req, res, next) {
  res.render('user/services')
});
router.get('/blogs', function(req, res, next) {
  res.render('user/blogs')
});
router.get('/contacts', function(req, res, next) {
  res.render('user/contact')
});
router.get('/projects', function(req, res, next) {
  res.render('user/projects')
});
module.exports = router;
