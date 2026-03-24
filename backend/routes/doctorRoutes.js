const express = require('express');
const router = express.Router();
const { createDoctor, getDoctors } = require('../controllers/doctorController');

router.post('/create', createDoctor);
router.get('/all', getDoctors);

module.exports = router;