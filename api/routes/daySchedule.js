const express = require("express");
const router = express.Router();
const {
  getSchedule,
  postSchedule,
  updateDay,
  deleteDay,
} = require("../controllers/schedule");

router.route("/").get(getSchedule).post(postSchedule);
router.route("/:id").put(updateDay).delete(deleteDay);

module.exports = router;
