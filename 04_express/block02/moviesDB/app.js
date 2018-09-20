const express = require('express'),
        app = express(),
        bodyParser= require('body-parser'),
        port = 3000
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post('/db',(req, res) =>{
    console.log('========>',req.body)
})



app.listen(port, () => {
    console.log('listening port 3000...')
})