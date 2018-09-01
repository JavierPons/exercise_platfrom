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
}

// first working add a film if is same genre and not there
function moviesDB(DB, genre, obj) {
    DB.forEach(function(arr,index){
     if(arr.genre == genre){
				arr.movies.forEach(function(dedo){
					if(dedo.title !== obj['title'])
						 DB[index].movies.push(obj);
				})
				    
     	}

	})
}




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