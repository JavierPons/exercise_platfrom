// == GENRE SCHEMA ==

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GenreSchema = new Schema({
         genre:{
             type:String, required:true, unique:true
         }
})
module.exports = mongoose.model(genres,GenreSchema);

// == MOVIES SCHEMA ==

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MoviesSchema = new Schema({
    genre_id:{
        type:Schema.Types.ObjectId,
        required:true
    },
    movie:{
                title:{type:String, required:true}
                , year:{type:Number, required:true}
    } 
})

module.exports = mongoose.model(movies,MoviesSchema);

