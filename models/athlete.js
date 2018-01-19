var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
// Using this constructor, create a new UserSchema object
var AthleteSchema = new Schema({
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
    type: String
  },
  positionRating: {
    type: Number
  },
  overallRank: {
    type: Number
  },
  // Store the ObjectId of a comment section
  // The ref property links the ObjectId to the Comment model
  // This allows us to populate the Athlete with an associated Comment
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  },

  // Store the ObjectId of a scouter section
  // The ref property links the ObjectId to the Scouter model
  // This allows us to populate the Athlete with an associated Scouter
  scouter: {
    type: Schema.Types.ObjectId,
    ref: "Scouter"
  }
});

var Athlete = mongoose.model("Athlete", AthleteSchema);

// Export the Athlete model
module.exports = Athlete;
