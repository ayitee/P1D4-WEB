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
// If the city exists, it adds a new property for the housing with the provided name, initializing it as an empty array to store characteristics.
// The 'addCharacteristics' function takes multiple characteristics as arguments and adds them to the specified housing's array.
// It checks if both the city and housing exist in the 'country' object before adding the characteristics.
