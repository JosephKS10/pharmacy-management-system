const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    medicine_name: String,
    supplier_name: Number,
    phone_number: Number,
    email: String,
    address: String,
})

module.exports = mongoose.model('Supplier',supplierSchema);

