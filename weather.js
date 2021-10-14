const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-7.335555&lon=108.186019&appid=640ffe65ea6591cfce691caa8a9d4a44&units=metric&lang=id';

fetch(url).then(function(response) {
    return response.json();
}).then(function(data) {
    document.getElementById("temp").innerHTML = data.main.temp + '℃';
    document.getElementById("humidity").innerHTML = data.main.humidity + '%';
    document.getElementById("wind").innerHTML = data.wind.speed + ' m/s';
    document.getElementById("cloud").innerHTML = data.weather[0].description;
    console.log(data);
}).catch(function(error) {
    console.error('Something went wrong!');
    console.error(error);
});