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