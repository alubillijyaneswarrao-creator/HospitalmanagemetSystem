const Appointment = require('../models/appointment');

// CREATE
exports.createAppointment = async (req, res) => {
    try {
        const result = await Appointment.create(req.body);

        res.json({
            success: true,
            appointment: result
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET ALL
exports.getAppointments = async (req, res) => {
    try {
        const data = await Appointment.find();

        res.json({
            success: true,
            appointments: data
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE
exports.deleteAppointment = async (req, res) => {
    await Appointment.findByIdAndDelete(req.params.id);

    res.json({
        success: true,
        message: "Deleted"
    });
};