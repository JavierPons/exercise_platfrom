// == GENRE SCHEMA ==

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GenreSchema = new Schema({
         genre:{
             type:String, required:true, unique:true
         }
})
module.exports = mongoose.model(genres,GenreSchema);