const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    medicine_name: String,
    storage_id: Number,
    price: Number,
    stock: Number,
    manu_info: String,
    date_of_expiry: Date
})

module.exports = mongoose.model('Medicine', medicineSchema);