var express = require('express');
var AccountModel = require('../models/account.models')
var router = express.Router();

//privilege middleware
function preventMainAccess(req, res, next) {
  if (req.url.startsWith('/home') && !req.isAuthenticated()) {
    return res.redirect('/auth/login'); 
  }
  next();
}

router.use(preventMainAccess);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
