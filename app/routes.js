// app/routes.js
var path = require('path');
var mongoose = require("mongoose");
mongoose.Promise = global.Promise
// Require all models
var db = require("./models");


module.exports = function(app, passport) {
    //HOME PAGE (with login links)
    app.get("/", function(req, res) {

        //using index.html that have 'local-login' and 'local signup'
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //LOGIN (shows form)
    app.get('/login', function(req, res) {
        //render page and pass any flash data if it exists
        res.render("login.ejs", { message: req.flash('loginMessage') });
    });

    // process the LOGIN form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile', //send to profile
        failureRedirect: '/', //redirect to signup
        failureFlash: true //allow flash message
    }));

    //SIGNUP (show signup form)
    app.get('/signup', function(req, res) {
        //render the page and pass any flash data if exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    //process the SIGN UP FORM (code is similar to POST route for login form)

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile', //secure profile page
        failureRedirect: '/signup', //signup page
        failureFlash: true //allow flash messages
    }));

    //PROFILE section
    //must be logged in to visit this page
    //using route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user: req.user //get the user out of session and pass to template
        });
    });

    //LOGOUT
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    //get NEW PLAYER FORM
    app.get('/newPlayer', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/newPlayer.html"));
    });
    
    //ADD NEW PLAYER
    app.post('/newPlayer', function (req, res){
        console.log("Body here" + req.body);
        
        db.Athlete.create(req.body)
        .then(function(athlete) {
            console.log("post create" + athlete);
        });
    });
    
    //get ALL PLAYERS PAGE
    app.get('/athletes', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/profile.html"));
    });
    
     //get ALL PLAYERS INFO
    app.get('/athletesInfo', function(req, res) {
    db.Athlete
    .find({})
    .sort({"ranking":-1})
    .populate("user")
    .then(function(dbAthletes) {
      // If we were able to successfully find Athletes
      res.json(dbAthletes);
      console.log(dbAthletes);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});





};

//route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    //if user is authenticated proceed
    if (req.isAuthenticated())
        return next();
    //if not redirect to the home page
    res.redirect('/');
}
