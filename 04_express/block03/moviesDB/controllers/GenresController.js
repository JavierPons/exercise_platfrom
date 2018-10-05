const Genre = require('../models/GenreModel');

class GenresController{
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

    async _addGenre(req,res){
        let { genre}= req.body;
        console.log(genre)
        try{
            const done = await Genre.create({genre:genre});
            res.send({done})
        
        }
        catch(e){
            res.send({e})
        }
    }

    async _deleteGenre(req, res){
        
        let { genre } = req.body;
                
            try{
                const done = await Genre.deleteOne({genre:genre});
                    res.send({done});
                }
                catch(e){
                     res.send({e})
                }
            }   
}
    
module.exports = new GenresController();