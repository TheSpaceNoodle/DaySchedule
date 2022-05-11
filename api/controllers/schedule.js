const asyncHandler = require("express-async-handler");

const getSchedule = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Posts" });
});

const postSchedule = asyncHandler(async (req, res) => {
  if (!req.body.desc) {
    res.status(400);
    throw new Error("please add a text");
  }

  res.status(201).json({ message: "Post Schedule" });
});

const updateDay = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update ${req.params.id}` });
});

const deleteDay = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete ${req.params.id}` });
});

module.exports = { getSchedule, postSchedule, updateDay, deleteDay };
