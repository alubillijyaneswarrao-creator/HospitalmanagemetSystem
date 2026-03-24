const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    doctorId: Number,
    name: String,
    specialization: String,
    experience: Number
});

module.exports = mongoose.model('doctor', doctorSchema);