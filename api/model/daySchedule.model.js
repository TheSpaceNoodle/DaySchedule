const mongoose = require("mongoose");

const dayScheduleSchema = mongoose.Schema(
  {
    date: String,
    time: String,
    activityName: {
      type: String,
      required: true,
    },
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Day", dayScheduleSchema);
