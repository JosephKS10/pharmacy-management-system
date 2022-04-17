const mongoose = require('mongoose');

const alternateSchema = new mongoose.Schema({
    pre_medicine_name: String,
    medicine_name: String,
    storage_id: Number,
    price: Number,
    stock: Number,
    manu_info: String,
    date_of_expiry: Date
})

module.exports = mongoose.model('Alternate', alternateSchema);