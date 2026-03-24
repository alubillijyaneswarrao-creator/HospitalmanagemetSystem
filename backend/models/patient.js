const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    patientId: Number,
    name: String,
    age: Number,
    disease: String,
    doctor: String
});

module.exports = mongoose.model('patient', schema);