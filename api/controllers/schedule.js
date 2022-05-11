const asyncHandler = require("express-async-handler");

const Schedule = require("../model/daySchedule.model");

const getSchedule = asyncHandler(async (req, res) => {
  const schedule = await Schedule.find();

  res.status(200).json(schedule);
});

const postSchedule = asyncHandler(async (req, res) => {
  if (!req.body.activityName) {
    res.status(400);
    throw new Error("please add a text");
  }

  const schedule = await Schedule.create({
    date: req.body.createdAt,
    time: req.body.time,
    activityName: req.body.activityName,
    description: req.body.description,
  });

  res.status(201).json(schedule);
});

const updateDay = asyncHandler(async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);

  if (!schedule) {
    res.status(400);
    throw Error("day not found");
  }

  const updatedSchedule = await Schedule.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedSchedule);
});

const deleteDay = asyncHandler(async (req, res) => {
  const schedule = await Schedule.findById(req.params.id);

  if (!schedule) {
    res.status(400);
    throw Error("no such day");
  }

  await schedule.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = { getSchedule, postSchedule, updateDay, deleteDay };
