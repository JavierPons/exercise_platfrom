async function asyncFet(city) {
	const apiKey ='fe85dc3b3af686cac71f8b17ae691969';
    
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`);
    const tiempo = await weather.json();
    console.log(tiempo);
    
    return tiempo;
}