const mongoose = require('mongoose')

const branchSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    branchManagerFirstName: { type: String, required: true },
    branchManagerMiddleName: { type: String, required: true },
    branchManagerLastName: { type: String, required: true },
    branchManagerEmail: { type: String, required: true },
    branchManagerPhone: { type: String, required: true },
    gender: { type: Number, required: true },
    branchName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalcode: { type: Number, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Branch', branchSchema);