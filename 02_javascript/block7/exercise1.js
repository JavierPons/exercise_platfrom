// write a function called moviesDB which we use to create a movie database.
// this function should take 3 arguments an array(the actual db), a genre, and an object (the movie)
// it should check if the genre exists and if it doesn't it should add it on.
// it should also check if the movie exists and add it on if it doesn't.
// see the example of the data structure you MUST follow.
// if the movie is already present it should not add it again and it should instead return the following 
// message:
// 'the movie the < YOUR_MOVIE_GOES_HERE > is already in the database!'

DB = [
        {
                genre:'thriller', 
                movies: [
                            {
                                title:'the usual suspects', release_date:1999
                            }
                        ]
        },
        {
                genre:'commedy', 
                 movies:[
                            {
                                title:'pinapple express', release_date:2008
                            }
        
                        ]
        }
    ]
// funciona es5,  busca genre iguales, busca peliculas iguales y anade si no existe.

function moviesDB(DB, genre, obj) {
    DB.forEach(function (dbObj) {
        if (dbObj.genre == genre && !dbObj.movies.some(function (mObj) {
            return mObj.title == obj.title;
        })) {
            dbObj.movies.push(obj);
        }else if(dbObj.genre == genre && dbObj.movies.some(function (mObj) {
            return mObj.title == obj.title;
        })){
                console.log(`the movie the ${obj.title} is already in the database!`)


        } 


    });
		if(DB.genre !== genre){
                DB.push({genre: genre});

            }
}


module.exports ={
    moviesDB
}