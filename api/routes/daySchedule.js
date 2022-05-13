const express = require("express");
const router = express.Router();
const {
  getSchedule,
  postSchedule,
  updateDay,
  deleteDay,
} = require("../controllers/schedule");
const { protect } = require("../middlware/authMiddlware");

router.route("/").get(protect, getSchedule).post(protect, postSchedule);
router.route("/:id").put(protect, updateDay).delete(protect, deleteDay);

module.exports = router;
