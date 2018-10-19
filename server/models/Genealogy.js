const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenealogySchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  username: {
    type: String,
  },
});

module.exports = mongoose.model('Genealogy', GenealogySchema);
