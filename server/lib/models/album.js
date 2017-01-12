const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaAlbums = new Schema ({

  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Album', schemaAlbums);