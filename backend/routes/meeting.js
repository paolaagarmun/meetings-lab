const express = require('express');
const {getMeetings, getOneMeeting, createMeeting,updateMeeting,deleteMeeting} = require('../controller/meetingController');

const { validateJwt} = require('../helpers/processJwt')


const router = express.Router();

router.get("/", validateJwt,getMeetings);
router.get("/meeting/:id", validateJwt,getOneMeeting);
router.post("/meeting", validateJwt,createMeeting);
router.put("/meeting/:id", validateJwt,updateMeeting)
router.delete("/meeting/:id",validateJwt, deleteMeeting)

module.exports = router;