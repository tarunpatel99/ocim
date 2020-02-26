const mongoose = require('mongoose')

var ownerSchema = new mongoose.Schema({
    firstName: {
        type: 'text',
        required: true
    },
    middleName: {
        type: 'text',
        required: true
    },
    lastName: {
        type: 'text',
        required: true
    },
    gender: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    instituteName: {
        type: String,
        required: true
    },
    instituteAddress: {
        type: String,
        required: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'citySchema'
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'stateSchema'
    },
    institutePhone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

mongoose.model('Owner', ownerSchema);