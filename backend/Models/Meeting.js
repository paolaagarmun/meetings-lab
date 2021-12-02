const {Schema, model} = require('mongoose');

const MeetingSchema = Schema ({
    title: {type:String},
    duration: {type:String},
    participants: {
        type:[],
        ref: "User"
    },
    date: { type: Date, default: Date.now }
})

module.exports = model("Meeting", MeetingSchema)