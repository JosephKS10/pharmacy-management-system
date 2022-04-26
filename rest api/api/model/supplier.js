const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    pre_medicine_name: String,
    supplier_name: String,
    phone_number: Number,
    email: String,
    address: String,
})

module.exports = mongoose.model('Supplier',supplierSchema);

