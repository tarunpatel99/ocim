const mongoose = require('mongoose')

var studentSchema = new mongoose.Schema({
    name: {
        type: 'text'
    }
});

mongoose.model('Student', studentSchema);
