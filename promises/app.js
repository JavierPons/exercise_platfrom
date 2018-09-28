let objFilm;
async function get_title_and_year (film) {
		
    const mov = await fetch(`https://omdbapi.com?t=${film}&apikey=thewdb`);
    const movie = await mov.json();
    console.log(movie.Title);
    console.log(movie.Year);
    return objFilm = {title:movie.Title, year:movie.Year}
}
