const mongoose = require('mongoose')

var ownerSchema = new mongoose.Schema({
    name: {
        type: 'text'
    }
});

mongoose.model('Owner', ownerSchema);