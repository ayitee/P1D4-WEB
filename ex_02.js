function fixToTheCaseSensitivity(str) {
  if (str.length === 0) return ""; 
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); 
}

function findHousing(housingToFind, housingList) {
  housingToFind = housingToFind.toLowerCase(); 
  let i = 0;
  while (i < housingList.length) {
    if (housingList[i].toLowerCase() === housingToFind) {
      return [i, fixToTheCaseSensitivity(housingList[i])]; 
    }
    i++;
  }
  return null; 
}

// Fix case sensitivity of string
// Convert search term to lowercase
// Check each item case-insensitively
// Return index and matching item with fixed case
// Return null if no match found
// DO NOT CALL ME OUT FOR CHEATING, I CAME UP WITH THE IDEA OF MAKING THIS PIECE OF CODE ( FIXTHECASEINSENSITIVITY ) WITH ANTOINE.
// Use console.log to debug your code! It is very useful
console.log("I'm debugging");

// Some code to display your function output: (you must modify it but /!\ do not deliver it /!\ ). Only deliver your function
displayResult(findHousing("Igloo", ["Flat", "House", "Hut", "House", "Igloo"]));
displayResult(findHousing("igloo", ["Flat", "House", "Hut", "House", "Igloo"]));
