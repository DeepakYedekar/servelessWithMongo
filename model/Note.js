const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({  
  title: String,
  description: String
});

module.exports =mongoose.models.Note ||  mongoose.model('Note', NoteSchema);