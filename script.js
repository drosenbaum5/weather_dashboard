$(document).ready(function () {

// API Key for our calls to OpenWeather API
var APIkey = "842d57b6e39252f9e8cbcc173b19fcdd";

// OnClick listener for search button
$("#search-button").on("click", function () {

    // Grab search value, store in variable, then clear out form field
    var searchValue = $("#search-value").val()
    console.log(searchValue);
    $("#search-value").val("")

    // Pass search term to API call
    searchWeather(searchValue);
})




function searchWeather(searchValue) {
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + APIkey + "&units=imperial",
        dataType: "json",
        success: function(data) {
            // Write code here to determine if item should be pushed to local storage
        }
    }).then(function(data) {
        console.log(data);
    })
}

// function for adding search terms as an LI item
function makeRow() {

}





// End document.ready
})