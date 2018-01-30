var mongoose = require("mongoose");

//require bcrypt
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

// Create a new userSchema object
var UserSchema = Schema({

  local: {
    email: String,
    password: String,
  },
  info: {
    firstName: String,
    lastName: String,
    areaCovered: String,
    contact:Number
  },
  
  athletes:[{
    type: Schema.Types.ObjectId,
    ref: 'Athlete'
  }]
});

// METHODS
//generating a hash
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//checking if the PASSWORD is valid
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

// //CREATE the model for users and expose it to our App

var User = mongoose.model('User', UserSchema);
module.exports = User;

