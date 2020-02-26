const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'State'
    }
});

module.exports = mongoose.model('City', citySchema);
