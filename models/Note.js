const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  title: {
    type: String, 
    required: true, 

  },
  content: {
    type: String,
    required: true,
    max: 500,
  }

},
{timestamps: true}
 
);
module.exports = mongoose.model('Note', noteSchema);