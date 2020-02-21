const mongoose = require('mongoose');

const stateSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
    cities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    }]
});

module.exports = mongoose.model('State', stateSchema);
