const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  master_id: {
    type: Number,
    unique: true
  }
}, {
  timestamps: true
});

const albumModel = mongoose.model('Album', albumSchema);

module.exports = albumModel;