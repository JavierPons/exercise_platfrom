const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    todosRoute = require('./routes/MoviesRoute'),
    bodyParser = require('body-parser');
// =================== initial settings ===================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// connnect to mongo
mongoose.connect('mongodb://localhost:27017/YourDBname',{
    userNewUrlParser:true
})
// routes
app.use('/todos', todosRoute);
// Set the server to listen on port 3000
app.listen(3000, () => console.log(`listening on port 3000`))
