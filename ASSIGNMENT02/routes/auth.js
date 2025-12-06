var express = require('express');
var passport = require('passport');
const multer = require('multer')
var bcrypt = require('bcrypt');

var router = express.Router();
const upload = require("../config/multer.config");
var AccountModel = require('../models/account.models');

router.get('/register', function(req, res, next) {
  try {
    return res.render('auth/register');
  } catch (err) {
    console.error('Render /auth/register error:', err);
    return next(err);
  }
});

router.post('/register',upload.single("accountProfilePicture") , async function(req, res) {
  try {
    const { accountEmail, accountUsername, accountPassword } = req.body;

    const newAccount = new AccountModel({
      accountEmail,
      accountUsername,
      accountPassword,
      accountProfilePicture: req.file ? `/userUpload/${req.file.filename}` : undefined
    });

    await newAccount.save();

    return res.redirect('/login'); 
  } 
  catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: "USERNAME_TAKEN" });
    }
    return res.status(500).json({ error: "SERVER_ERROR" });
  }
});

router.get('/login', function(req, res, next){
  try {
    return res.render('auth/login');
  } catch (err) {
    console.error('Render /auth/login error:', err);
    return next(err);
  }
})

router.post("/login", passport.authenticate("local"),(req, res) => {
    return res.status(200).json({ success: true });
  }
);

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.redirect("/auth/login");
  });
});

module.exports = router;
