const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatsSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
      totalDuration: {
        type: Number,
      },

      numExercise: Number,

      exerciseType: Number,

      totalWeight: Number,

      totalSets: Number,

      totalReps: Number,

      totalDistance: Number
});

const Stats = mongoose.model("Stats", StatsSchema);

module.exports = Stats;