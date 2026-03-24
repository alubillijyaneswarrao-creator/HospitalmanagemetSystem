const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Registering:", email);
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword });
        res.status(201).json({ message: "Registered", user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login attempt:", email);
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret123', { expiresIn: '1d' });
        res.json({ token, message: "Login Success" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};
exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("REGISTER HIT");   // 🔥 DEBUG

        const hashed = await bcrypt.hash(password, 10);

        const user = await User.create({ email, password: hashed });

        res.json({ success: true, message: "Registered" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};