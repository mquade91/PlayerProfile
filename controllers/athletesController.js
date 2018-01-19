/* global $ axios */
console.log("AC");
var express = require("express");
var router = express.Router();
// var axios = require("axios");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var db = require("../app/models");

// When a browser calls for the site, get the login page.
router.get("/", function(req,res) {
      res.send;
      console.log(res);
    });

// A succesful log in will render the logged in page.
router.get("/loggedIn", function(req,res) {
      res.send;
      console.log(res);
    });
    
// The input button will call for the input form page.
router.get("/inputPage", function(req,res) {
      res.send;
      console.log(res);
    });

// The view all button will call for all Athletes from the db
// Sort to put in alpha order
// This returns all data on the athletes - decide what to use on front end
router.get("/athletes", function(req, res) {
  db.Athletes
    .find({}).
    sort({"lastNAme":-1})
    .populate("scouter")
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

// The lookup button will call for all with a given last name.
router.get("/athletes/lastName/", function(req, res) {
  db.Athletes
    .find({"lastName": "lastName"})
    .sort({"lastNAme":-1})
    .populate("scouter")
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

// the view by position button will call for a list by position
// Sort by rating
router.get("/athletes/position/", function(req, res) {
  db.Athletes
    .find({"position": "position"})
    .sort({"rating":-1})
    .populate("scouter")
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

// The view by rank button will call for a list by draft ranking.
// Sort by ranking
router.get("/athletes/", function(req, res) {
  db.Athletes
    .find({})
    .sort({"ranking":-1})
    .populate("scouter")
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

// Saving an Athlete's associated data
router.post("/athletes/:id", function(req, res) {

  db.Athletes
    .create(req.body)
    .then(function(dbComment) {

    })
    .then(function(dbAthlete,err) {

      res.json(dbAthlete);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Updating an Athlete's associated data
router.put("/athletes/:id", function(req, res) {

  db.Athlete
    .create(req.body)
    .then(function(dbAthlete) {

    })
    .then(function(dbAthlete,err) {
      // If we were able to successfully update an Article,
      // send it back to the client
      res.json(dbAthlete);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

module.exports = router;
