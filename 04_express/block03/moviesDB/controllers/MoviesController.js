const Movie = require('../models/MoviesModel');
const Genre = require('../models/GenreModel');

class MovieController {
    //GET FIND ALL

    async _get(req,res){
        try{
            const done = await Genre.find({});
            res.send(done);
        }
        catch(e){
            res.send({e})
        }
    }
        // GET MOVIES

    async _movies(req,res){
        try{
            const done = await Movie.find({});
            res.send(done);
            // db.forEach(function(ele){
            //     console. log(ele.genre, ele.movies) 
            //      gen.push(ele.genre)
            //      gen.push(ele.movies)
            // })
            // res.send(gen);
        }
        catch(e){
            res.send({e});
        }
    }
        // ADD MOVIES

    async _add(req,res){
        let { film, year, genre } = req.body;
        console.log('====>', film)
        const genr = await Genre.findOne({genre})
        if(genr){
            try{
            const done = await Movie.create({genre:{genre},title:{film},year:{year}});
            res.send(done);
                
            }
            catch(e){
                res.send({e})
            }
        }else{
            console.log('genre not exist');
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
        let { genre}= req.body;
        try{
            const done = await Genre.create({genre});
            res.send(done)
        
        }
        catch(e){
            res.send({e})
        }
    }

}

module.exports = new MovieController();