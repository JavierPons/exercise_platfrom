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

app.post('/genre/add', (req,res) => {
        let key = req.body.genre;
        db.forEach(function(ele){  // how I can loop and check if exist genre/ if not console newone
            if(!ele.key == key){   // why here is the conditional not working?
                console.log({genre: key})
            }
        })
       


})
 // How I can /genre/updated existing genre 
 // how I loop and how I add new genre




app.post('/genre/movie/add', (req,res) => {
    
    let key = req.body.genre
    return console.log('k e y ==>', key)
    let result = ele => {return ele.genre === key}
    let index = db.findIndex(result)
    db[index].movies.push({title:'', year:value})
    res.send({title:key} )
})

// how to display all genres  /genres

// how to display all genres and all movies   / genre/movies


//how to delete how to get there, most problem is looping and get exactly film I 
// want delete    /genre/movie/delete

// how to update title I will try to do for myself

app.get('/genre/movies',(req, res) => {
    db.forEach(function(ele){
        console.log(ele)       // why is not working the console.log here?
    })
})


app.listen(port, () => {
    console.log('listening port 3000...')
})
