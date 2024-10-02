// I AM UNSURE OF WETHER OR NOT THIS PROGRAM WORKS,
// AS THIS IS A SOMEWHAT RECOVERED VERSION OF THE FINAL VERSION I HAVE LOST BECAUSE I DID NOT COMMIT BEFORE SHUTTING DOWN SAFARI

let country = {};

function createCity(country, cityName) {
    country[cityName] = {};
}

function createHousing(country, cityName, housingName) {
    if (country[cityName]) {
        country[cityName][housingName] = [];
    }
}

function addCharacteristics(country, cityName, housingName, ...characteristics) {
    if (country[cityName] && country[cityName][housingName]) {
        country[cityName][housingName].push(...characteristics);
    }
}

// This code defines a 'country' object that acts as a container for cities.
// The 'createCity' function adds a new city to the 'country' object, using the city name as a key and assigning it an empty object as its value.
// The 'createHousing' function checks if the specified city exists in the 'country' object.


