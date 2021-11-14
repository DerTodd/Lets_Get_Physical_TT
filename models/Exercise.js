const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },

  exerciseType: String,

  name: String,

  duration: Number,

  distance: Number,

  weight: Number,

  sets: Number,
  
  reps: Number

});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;