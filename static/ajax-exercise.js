"use strict";


// PART 1: SHOW A FORTUNE

function displayFortune(fortune) {
    $('#fortune-text').html(fortune);
}


function showFortune(evt) {
    $.get("/fortune", displayFortune);
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    $.get(url, displayWeather);
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);

function displayWeather(weather_info) {
    var forecast = weather_info.forecast;
    $('#weather-info').html(forecast);
}


// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


