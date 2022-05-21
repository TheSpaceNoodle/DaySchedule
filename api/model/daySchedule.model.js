const mongoose = require("mongoose");

const dayScheduleSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    activityName: {
      type: String,
      required: true,
    },
    description: String,
    date: String,
    time: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Day", dayScheduleSchema);
