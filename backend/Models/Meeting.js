const {Schema, model} = require('mongoose');

const MeetingSchema = Schema ({
    title: {type:String},
    duration: {type:String},
    participants: {type:[]},
    date: { type: Date, default: Date.now }
})

module.exports = model("Meeting", MeetingSchema)