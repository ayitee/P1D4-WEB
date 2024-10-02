function addHousing(housingList, newHouse, quantity) {
  if (housingList.has(newHouse)) {
    housingList.set(newHouse, housingList.get(newHouse) + quantity);
  } else {
    housingList.set(newHouse, quantity);
  }
}
// This function checks if the housing map already contains the specified house type (newHouse). 
// If it does, it increases the quantity by adding to the existing value.
// If it doesn’t, it adds the new house type with the specified quantity.
