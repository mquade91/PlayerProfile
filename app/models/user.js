var mongoose = require("mongoose");

//require bcrypt
var bcrypt = require('bcrypt-nodejs');

// Create a new ScouterSchema object
//in passport expample ScouterSchema = mongoose.Schema({...})
var ScouterSchema = mongoose.Schema({

  local: {
    email: String,
    password: String,
  },
  info: {
    firstName: String,
    lastName: String,
    areaCovered: String,
  }

});

// METHODS
//generating a hash
ScouterSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//checking if the PASSWORD is valid
ScouterSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.Scouter.password);
};

// //CREATE the model for users and expose it to our App

var User = mongoose.model('User', ScouterSchema)
module.exports = User

// var Scouter = mongoose.model("Scouter", ScouterSchema);
// // Export the Comment model
// module.exports = Scouter;
