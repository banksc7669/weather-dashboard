//Start with listing elements
var city = "";
var url = "";
var APIkey = "";
var currenturl = "";
var queryurl = "";

var citiesDiv = document.getElementById("searched_cities");

//Empty array
var cities = [];
init();
listClicker();
searchClicker();

//run function to fill array
function init() {
    var savedCities = JSON.parse(localStorage.getItem("cities"));

    if (savedCities !== null) {
        cities = savedCities
    }
    renderButtons();
}

//set local storage
function saveCities() {
    localStorage.setItem("cities", JSON.stringify(cities));
}

function renderButtons() {
    citiesDiv.innerHTML = "";
    if (cities == null) {
        return;
    }
    var specialCities = [...new Set(cities)];
    for (var i = 0; i < specialCities.length; i++) {
        var cityName = specialCities[i];

        var buttonElement = document.createElement("button");
        buttonElement.textContent = cityName;
        buttonElement.setAttribute("class", "listbtn");
        citiesDiv.appendChild(buttonElement);
        listClicker();
    }
}

//click function
function listClicker() {
    $(".listbtn").on("click", function(event){
        event.preventDefault();
        city = $(this).text().trim();
    })
}

//click function
function searchClicker() {
$(".searchbtn").on("click", function(event){
    event.preventDefault();
    city = $(this).text().trim();
    cities.push(city);

    if (cities.length > 5){
        cities.shift()

        saveCities();
        renderButtons();
        
}
})

//Now the tricky part. API calls for URLS.
function calls() {
url = "https://api.openweathermap.org/data/2.5/forecast?q=";
currenturl = "https://api.openweathermap.org/data/2.5/weather?q=";
APIkey = "c208340a374216a5b035c2687e5646c5";

queryurl = url + city + APIkey
current_weather_url = currenturl + city + APIkey;

$("city_name").text("current weather in" + city);

$.ajax({
    url: queryurl,
    method: "GET",
    
}).then(function(response){
    var forecast = 0;
    
}