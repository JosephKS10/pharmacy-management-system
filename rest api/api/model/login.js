const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username: String,
    password: String,
    employee_id: String,
    first_name: String,
    last_name: String
})

module.exports = mongoose.model('Login', loginSchema);