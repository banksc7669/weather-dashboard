//Start with listing elements
var city="";
var url="";
var APIkey="";
var currenturl="";
var queryurl="";

var citiesDiv = document.getElementById("searched_cities");

//Empty array
var cities = []; 
init();
listClicker();
searchClicker();

//run function to fill array
function search() {
    var savedCities = JSON.parse(localStorage.getItem("cities"));
    
    if (savedCities !== null) {

    }
    renderButtons ();
}

//set local storage
function saveCities() {
    localStorage.setItem("cities", JSON.stringify(cities));
}

function renderButtons() { 
    citiesDiv.innerHTML = "";
    if (cities == null){
        return;
    }
}