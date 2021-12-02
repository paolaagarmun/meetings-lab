const Meeting = require('../Models/Meeting');

const getMeetings = async (req,res) => {
    const meetings = await Meeting.find();
    try {
        return res.status(200).json(meetings)
    } catch (error) {
        return res.status(500).json({message:"Couldn't get meetings"})
    }
}

const getOneMeeting = async (req, res) => {
    const { id } = req.params
    const meeting = await Meeting.findById(id)
    try {
        return res.status(200).json(meeting)
    } catch (error) {
        return res.status(500).json({message: "Couldn't get user"})
    }
}

const createMeeting = async (req,res) => {
    const meeting = await Meeting.create(req.body);
    try {
        return res.status(201).json(meeting)
    } catch (error) {
        return res.status(500).json({message: "couldn't create"})        
    }
}

const updateMeeting = async (req,res) => {
    const { id } = req.params;
    const meeting = await Meeting.findByIdAndUpdate(id, req.body, {new:true})
    try {
        return res.status(202).json(meeting)
    } catch (error) {
        return res.status(500).json({message: "couldn't update"})
    }
}

const deleteMeeting = async (req,res) => {
    const { id } = req.params
    await Meeting.findByIdAndDelete(id)
    try {
        return res.status(203).json({message: "deleted successfully"})
    } catch (error) {
        return res.status(500).json({message: "couldn't delete"})
    }
}

module.exports = {
    getMeetings,
    getOneMeeting,
    createMeeting,
    updateMeeting,
    deleteMeeting
}