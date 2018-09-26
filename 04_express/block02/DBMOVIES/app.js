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
    var genreExists = false // this one is to track if genre is already there, initially false
    let key = req.body.genre;
    console.log(key) // I WILL FIRST PUT A CONSOLE.LOG HERE TO SEE WHAT KEY IS
    // now I know it is a genre passed from the front-end.
    db.forEach(function(ele){  
        if(ele.genre == key){   // now this would be a proper condition, if genre's value is matching the one passed form the frond-end
            console.log('genre exists')
            genreExists = true
        } 

    })
        // after looping we can see if we can add a new genre:
        if (genreExists == false) { // if genre passed is not in the db we can add it 

            db.push({genre:key, movies:[]}) // we a pushing a new object to the DB and it has genre and movies array for the new movies to be added to
        }
        
   
   res.send(db) // and we send back the entire db


})




// app.post('/genre/add', (req,res) => {
//         let key = req.body.genre;
//         db.forEach(function(ele){  // how I can loop and check if exist genre/ if not console newone
//             if(ele.key == key){   // why here is the conditional not working?
//                 console.log({genre: key})
//             }
//         })
       


// })
 // How I can /genre/updated existing genre 
 // how I loop and how I add new genre

 app.post('/genre/update', (req,res) => {
    let oldGenre = req.body.oldGenre; // we pass old genre
    let newGenre = req.body.newGenre // we pass new genre

     db.forEach(function(ele){  
         if(ele.genre == oldGenre){   // now we are searching for the genre to be updated
             db[db.indexOf(ele)].genre = newGenre // and we assign new genre as a value for the 'genre' key of the ele which is found to have the matching genre
         } else {
             console.log('genre is not found') // otherwise, genre is not found so we can't update it
         }
         
     })
    res.send(db) // and we send back the entire db


})


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
