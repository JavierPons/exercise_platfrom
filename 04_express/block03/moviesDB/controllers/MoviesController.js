const Movie = require('../models/MoviesModel');
const Genre = require('../models/GenreModel');

class MovieController {
    //GET FIND ALL

    async _get(req,res){
        try{
            db.forEach(function(ele){
                console.log(ele.genre);
                gen.push(ele.genre)
            })
                res.send(gen);
        }
        catch(e){
            res.send({e})
        }
    }
        // GET MOVIES

    async _movies(req,res){
        try{
            db.forEach(function(ele){
                console. log(ele.genre, ele.movies) 
                 gen.push(ele.genre)
                 gen.push(ele.movies)
            })
            res.send(gen);
        }
        catch(e){
            res.send({e});
        }
    }
        // ADD MOVIES

    async _add(req,res){
        try{
            let key = req.body.genre
            let result = ele => {return ele.genre === key}
            let index = db.findIndex(result)
            db[index].movies.push({title:'', year:value})
            res.send({title:key} )
        }
        catch(e){
            res.send({e})
        }
    }

    // UPDATE MOVIE

    async _update(req, res){
        try{
            let oldTitle = req.body.oldTitle;
            let newTitle = req.body.newTitle;
            let newYear = req.body.newYear;
            let genre = req.body.genre;
        
        db.forEach(function(ele,i){
                if(ele.genre == genre){
                  db[db.indexOf(ele)].movies.forEach(function(item,ind){
                    if(item.title == oldTitle){
                       db[db.indexOf(ele)].movies[ind].title = newTitle;
                       if(newYear == undefined){
                                    console.log('there is not year given')
                    }else{
                        db[db.indexOf(ele)].movies[ind].year = newYear;
                    }
                    }
                     
                  })
                      
                }
                
            })
        
            res.send(db);   
        }
        catch(e){
            res.send({e})
        }

    }

    async _deleteMovie(req,res){
        try{
            let deleteMovies = req.body.title;
            let genre = req.body.genre;
            db.forEach(function(ele,i){
                if(ele.genre == genre){
                    delete db[i].movies
                }
            })
    
            res.send(db);
        }
        catch(e){
            res.send({e})
        }
    }

    async _deleteGenre(req, res){
        try{
            let deleteGenre = req.body.deleteGenre; // one we want to delete
            console.log(deleteGenre);
        db.forEach(function(ele,i){
                if(ele.genre == deleteGenre){
                    delete db[i];
                }
            })

        res.send(db)
        }
        catch(e){
            res.send({e})
        }
    }

    async _addGenre(req,res){
        try{
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
        }
        catch(e){
            res.send({e})
        }
    }

}

module.exports = new MovieController();