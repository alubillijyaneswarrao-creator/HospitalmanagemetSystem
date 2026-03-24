const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const db = require('./dbconfig/dbconfig');
db.dbconnect();

app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(express.json());

// ROUTES
const patientRoutes = require('./routes/patientRoutes');
app.use('/api/patient', patientRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const doctorRoutes = require('./routes/doctorRoutes');
app.use('/api/doctor', doctorRoutes);

const appointmentRoutes = require('./routes/appointmentRoutes');
app.use('/api/appointment', appointmentRoutes);

// SERVER LAST
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});