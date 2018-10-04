

// == MOVIES SCHEMA ==

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
    genre_id:{type:Schema.Types.ObjectId,required:true},
    title:{type:String, required:true}
     ,year:{type:Number, required:true}
  
})

module.exports = mongoose.model('movies',MovieSchema);

