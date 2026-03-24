const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/authController');

// ✅ DEBUG CHECK ROUTE
router.get('/check', (req, res) => {
    res.send("Auth route working");
});

// 🔥 REGISTER DEBUG
router.post('/register', (req, res) => {
    console.log("REGISTER ROUTE HIT");
    register(req, res);
});

router.post('/login', login);

module.exports = router;