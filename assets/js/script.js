//API call for City


var lat = "33.44"
var lon = "-94.04"
var APIkey = 

// 2nd API Call - need city first
var weatherData = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`


console.log(weatherData);

