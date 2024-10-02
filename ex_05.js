function getHousesPrototype() {
  const houses = new Map();
  houses.set('Apartment 75008', 90);
  houses.set('Apartment 94300', 105);
  houses.set('Apartment 92300', 140);
  houses.set('Apartment 75015', 65);
  return houses;
}

console.log(getHousesPrototype());


// This function creates a new Map to hold apartment data, 
// using apartment names as keys and their prices as values.
// It adds four apartments to the map and returns it.
// The final console log displays the populated map for review.
