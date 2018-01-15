var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;
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
  role: {
    type: String,
    required: true
  },
    areaCovered: {
    type: String,
    required: true
  },
  id: Schema.Types.ObjectId
});

var Scouter = mongoose.model("Scouter", ScouterSchema);
// Export the Comment model
module.exports = Scouter;