var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

//require bcrypt
var bcrypt = require('bcrypt-nodejs');

// Create a new CommentSchema object
var ScouterSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  areaCovered: {
    type: String,
    required: true
  },

  id: Schema.Types.ObjectId
});


// METHODS
//generating a hash
ScouterSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//checking if the PASSWORD is valid
ScouterSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

// //CREATE the model for users and expose it to our App
// module.exports = mongoose.model('User', userSchema);

var Scouter = mongoose.model("Scouter", ScouterSchema);
// Export the Comment model
module.exports = Scouter;
