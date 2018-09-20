const express = require('express'),
        app = express(),
        body = require('body-parser'),
        port = 3000
app.use(body.urlencoded({extended: true}))
app.use(body.json());
let  db = [
    
    {
    genre: "musical", 
    movies: [
                {title: 'movie A', year: 2000}, 
                {title: 'movie B', year: 3000}
            ]},
    {
    genre:"horror" ,
     movies: [
                {title: 'movie Z', year: 2020}, 
                {title: 'movie X', year: 3030}
            ]}
] 
// [{genre:musical[{name: 'what ever', rel:2008},{name: },{}]},{genre:commedy[{},{},{}]}]
app.use('/db', (req,res) => {
    res.send('Hello World!');
})

app.post('/genre/add',(req, res) =>{
    let key = req.body.genre;
    if(!key){
    db.push({gender:key, movies:[]}) 
     res.send(db) 
   
    }
     else{
        db.push({gender:key, movies:[]}) 
        res.send(db)
        
    }
     
      
})

app.post('/genre/update', (req, res) => {
       let key = req.body.genre
       db.forEach(function(ele){
           if(ele.genre)
       })
       
       
        

})

app.post('/genre/movie/add', (req,res) => {


})

app.get('/genres', (req, res) =>{
    
        db.forEach(function(ele) {
            console.log(ele.genre)
            
        })

})
app.get('/genre/movies',(req, res) => {
    db.forEach((ele)=>{
        console.log(ele)
    })
})

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