const Doctor = require('../models/doctor');

exports.createDoctor = async (req, res) => {
    const d = await Doctor.create(req.body);
    res.json(d);
};

exports.getDoctors = async (req, res) => {
    const d = await Doctor.find();
    res.json({ doctors: d });
};