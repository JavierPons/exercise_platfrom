const Movie = require('../models/MoviesModel');

class MovieController {
   
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
        let { film, year, genre_id} = req.body;
            console.log(film, year, genre)
        const genr = await Movie.findOne({_id:genre_id})
            console.log(genr,'====>')
        if(genr){
            try{
                const done = await Movie.create({genre_id:genre_id,title:film,year:year});
            res.send({done});
                
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
        console.log(oldFilm, newFilm, genre, year)
            try{

                // filter / selector  {title:oldFilm}
                // update $set:{ genre:genre,title:newFilm, year:year
                const done = await Movie.updateOne({title:oldFilm},{$set:{
                    genre:genre,title:newFilm, year:year
                }})
                res.status(200).send({done});
            }
            catch(e){
                res.send({e})
            }
    }

    // DELETE MOVIE

    async _deleteMovie(req,res){
        console.log('Hey !!!')
        let {film, year} = req.body;
        try{
            const done = await Movie.deleteOne({title:film,year:year});
            res.send({done});
        }
        catch(e){
            res.send({e})
        }
    }  
}

module.exports = new MovieController();