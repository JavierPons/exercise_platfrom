const express = require('express'),
        app = express(),
        body = require('body-parser'),
        port = 3000
app.use(body.urlencoded({extended: true}))
app.use(body.json());
let db = [];
// [{genre:musical[{name: 'what ever', rel:2008},{name: },{}]},{genre:commedy[{},{},{}]}]
app.use('/db', (req,res) => {
    res.send('Hello World!');
})

app.post('/genre/add',(req, res) =>{
    let key = req.body.genre;
     db.push({key:[]})  
        console.log(db)
})
console.log('=====>', db)


app.listen(port, () => {
    console.log('listening port 3000...')
})




/* db = [
    {musical: [
                {title: 'movie A', year: 2000}, 
                {title: 'movie B', year: 3000}
            ]},
    {horror: [
                {title: 'movie Z', year: 2020}, 
                {title: 'movie X', year: 3030}
            ]}
] */