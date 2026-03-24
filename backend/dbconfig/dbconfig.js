const mongoose = require('mongoose');
require('dotenv').config();

exports.dbconnect = () => {
    mongoose.connect(process.env.DB_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
};