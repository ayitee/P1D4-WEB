function fillBus(peopleAtBusStops, busSeats) {
  if (!Array.isArray(peopleAtBusStops) || typeof busSeats !== 'number' || busSeats < 0) {
    return -1; 
  }

  let currentCapacity = 0;
  
  for (let i = 0; i < peopleAtBusStops.length; i++) {
    currentCapacity += peopleAtBusStops[i]; 
    if (currentCapacity > busSeats) { 
      return i+1; 
    }
  }

  return -1; 
}

// Check for valid input
// Initialize current capacity
// Iterate through each bus stop
// Add people from the current stop
// Return index if bus is full
// Return -1 if bus never reaches full capacity
