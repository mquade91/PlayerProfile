//config/database.js
var mongojs = require("mongojs");
//Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "playerProfile";
var collections = ["athletes", "scouters", "users", "comments"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

module.exports = {
  'url': process.env.MONGODB_URI || "mongodb://localhost/playerProfile"
};
