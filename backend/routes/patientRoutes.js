const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/patientController');

router.post('/create', ctrl.createPatient);
router.get('/all', ctrl.getAllPatients);
router.delete('/:id', ctrl.deletePatient);

module.exports = router;