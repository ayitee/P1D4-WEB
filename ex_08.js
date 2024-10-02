// UN JOUR PEUT ETRE

function houseEnergyScore(housingList) {
    var sortedList = [];
    
    for (var i = 0; i < housingList.length; i++) {
        var name = housingList[i][0];
        var energy = housingList[i][1];
        
        var grade;
        if (energy >= 450) {
            grade = 'G';
        } else if (energy < 450 && energy >= 330) {
            grade = 'F';
        } else if (energy < 330 && energy >= 230) {
            grade = 'D';
        } else if (energy < 230 && energy >= 150) {
            grade = 'C';
        } else if (energy < 150 && energy >= 90) {
            grade = 'B';
        } else if (energy < 90 && energy >= 51) {
            grade = 'A';
        } else {
            grade = 'A';
        }

        sortedList.push([name, energy, grade]);
    }

    return sortedList;
}

var housingList = [['Log', 20], ['Villa', 212], ['Flat', 340]];
console.log(houseEnergyScore(housingList));
