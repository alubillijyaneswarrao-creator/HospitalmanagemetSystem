const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    created_on: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('appointment', appointmentSchema);