const mongoose = require("mongoose");

const dayScheduleSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
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
