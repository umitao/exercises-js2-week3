/*
================

Create an HTML file that uses this javascript file.
The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160 with 
user latitude and longitude.
When you get the response from the server, print the current temperature in an <h3> marker.


================
*/

// Selecting input boxes & GET button
var button = document.querySelector("#getTemp");
var latInput = document.querySelector("#latitude");
var lonInput = document.querySelector("#longitude");

button.addEventListener("click", getTemp);

function getTemp() {
  var url =
    "https://fcc-weather-api.glitch.me/api/current?lat=" +
    latInput.value +
    "&lon=" +
    lonInput.value;

  fetch(url)
    //Get the content of the response
    .then(function (response) {
      return response.json();
    })

    // printing response to HTML
    .then(function (weather) {
      var temperature = document.querySelector("#showTemp");
      var degrees = document.createElement("h3");
      var location = document.createElement("h3");
      temperature.appendChild(location);
      location.innerText = weather.name;
      temperature.appendChild(degrees);
      degrees.innerHTML = "Temperature: " + weather.main.temp + " &#8451;  / ";
      degrees.innerHTML += " Feels like: " + weather.main.feels_like + "℃";
    });
}
