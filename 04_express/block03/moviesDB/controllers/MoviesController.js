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
        let { oldFilm, newFilm, genre, year} = req.body;
        const genr = await Genre.findOne({genre})
        const fil = await Movie.findOne({oldFilm})
        if(genr){
            if(fil){
            try{
                const done = await Movie.create({genre:{genre},title:{newFilm},year:{year}});
                res.send(done);   
            }
            catch(e){
                res.send({e})
            }
        }else{
            console.log('Film not found. Try again!')
        }   
    }

    }

    async _deleteMovie(req,res){
        let { genre, film, year} = req.body;
        const genr = await Genre.findOne({genre})
        const fil = await Movie.findOne({film})
        if(genr){
            if(fil){
                    try{
                        const done = await Movie.deleteOne({title:{fil},year:{year}});
                        
                        res.send(done);
                    }
                    catch(e){
                        res.send({e})
                    }
            }else{
                console.log('Not found that film. Try again!')
            }

            }else{
                console.log('Genre not found. Try again')
            }       
        }

        
    

    async _deleteGenre(req, res){
        let { genre } = req.body;
        const genr = await Genre.findOne({genre})
       
        if(genr){
                    try{
                        const done = await Movie.deleteOne({genre:{genr}});
                        
                        res.send(done);
                    }
                    catch(e){
                        res.send({e})
                    }
            

            }else{
                console.log('Genre not found. Try again')
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