async function asyncFet(city,year) {
    let movies = [];
    
    const weather = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}`);
    const tiempo = await weater.json();
    console.log(tiempo);
    
	return movies;
}