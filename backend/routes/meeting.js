const express = require('express');
const {getMeetings, getOneMeeting, createMeeting,updateMeeting,deleteMeeting} = require('../controller/meetingController');
const router = express.Router();

router.get("/", getMeetings);
router.get("/meeting/:id", getOneMeeting);
router.post("/meeting", createMeeting);
router.put("/meeting/:id", updateMeeting)
router.delete("/meeting/:id", deleteMeeting)

module.exports = router;