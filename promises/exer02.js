async function recent_movies(arrOfTitles,year) {
    
}

const recent_movies = (titles,year) => {
    let movies = [];
    for (var title of titles){
        fetch(`https://omdbapi.com?t=${title}&apikey=thewdb`)
        .then((movie)=> {
            movie.json().then((mov)=> { 
				if(parseInt(mov.Year) > year){
					
                 movies.push(mov.Title,mov.Year)
                }
            })
        })
    }
	return movies;
}