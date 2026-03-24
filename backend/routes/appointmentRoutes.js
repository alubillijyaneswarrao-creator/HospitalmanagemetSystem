const express = require('express');
const router = express.Router();

const {
    createAppointment,
    getAppointments,
    deleteAppointment
} = require('../controllers/appointmentController');

router.post('/create', createAppointment);
router.get('/all', getAppointments);
router.delete('/:id', deleteAppointment);

module.exports = router;