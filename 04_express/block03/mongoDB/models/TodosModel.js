const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todosSchema = new Schema({
    todo:String
})
module.exports =  mongoose.model('todos', todosSchema);
