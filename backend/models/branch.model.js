const mongoose = require('mongoose')

const branchSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    branchName: {
      type: String,
      required: true
    },
    branchDescription: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    postalcode: {
      type: Number,
      required: true
    },
});

const branchManagerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
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
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  postalcode: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  branch: {
    _id:  mongoose.SchemaTypes.ObjectId,
    ref: branchSchema
  },
});

module.exports = mongoose.model('Branch', branchSchema);
module.exports = mongoose.model('BranchManager', branchManagerSchema);
