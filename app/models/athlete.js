var mongoose = require("mongoose");

var Schema = mongoose.Schema;
// Using this constructor, create a new UserSchema object
var AthleteSchema =  Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  fortyTime: {
    type: Number
  },
  school: {
    type: String
  },
  position: {
    type: String,
    required:true
  },
  positionRating: {
    type: Number
  },
  overallRank: {
    type: Number
  },
  comment: {
    type: String,
  },
  // Store the ObjectId of a scouter section
  // The ref property links the ObjectId to the Scouter model
  // This allows us to populate the Athlete with an associated Scouter
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

var Athlete = mongoose.model("Athlete", AthleteSchema);

// Export the Athlete model
module.exports = Athlete;
