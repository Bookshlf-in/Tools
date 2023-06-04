const mongoose = require('mongoose');

const collegePredictorEntries = mongoose.Schema(
  {
    year: {
      type: Number,
    },
    percentile: {
      type: Number,
    },
    rank: {
      type: Number,
    },
    academicProgram: {
      type: String,
    },
    quota: {
      type: String,
    },
    seatType: {
      type: String,
    },
    gender: {
      type: String,
    },
    userId: {
      type: String,
    },
    sessionId: {
      type: String,
    },
    version: {
      type: String,
    },
    ip: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.collegePredictorEntries ||
  mongoose.model('collegePredictorEntries', collegePredictorEntries);
