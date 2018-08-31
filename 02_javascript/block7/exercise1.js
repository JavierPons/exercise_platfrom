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
// this is working most

function moviesDB(DB, genre, obj) {
    DB.forEach(function(arr){
        
     if(arr.genre == genre){
                
            if(arr.movies){
                arr.movies.forEach(function(film){
                            
                    if(film.title !== obj.title){
                            
                            console.log(genre)
                        DB[genre]['movies'].push(obj);
                } 
             })
        }
      }else{
            DB.push(genre)	
            }

})
}


// this is for check out not good code
    function moviesDB(DB, genre,obj) {
        //start
         for (var i = 0; i < DB.length; i++) {
             if(DB[i]['genre'] == genre){
               if(DB[i].gender.movies === DB[i]['movies'][0].title){
                DB[i].movies.push(obj);
               }
             }
        }
         DB.push({genre: genre});
     };
module.exports ={
    moviesDB
}