//Creating new Person objects
var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person ("Jem", "62347", "63500", 4);
var boo = new Person ("Boo", "11435", "54000", 3);
var scout = new Person ("Scout", "6243", "74750", 5);


//Person constructor with name, id, income, and rating properties
function Person (name, idNum, empIncome, empRating) {
  this.name = name;
  this.idNum = idNum;
  this.empIncome = empIncome;
  this.empRating = empRating;
}
//Array of objects
var employees = [atticus, jem, boo, scout];

function calculateSTI(empInfo){
    var name = empInfo[i].name;
    var empNumber = empInfo[i].idNum;
    var currentSalary = Math.round(parseFloat(empInfo[i].empIncome));
    var empRating = empInfo[i].empRating;

    var bonusPercent = 0;

    var processedEmployee = [];

    var bonusMoney = 0;

    var totalSalary = 0;

    switch(empRating){
        case 0:
        case 1:
        case 2:
            bonusPercent = 0;
            break;
        case 3:
            bonusPercent = .04;
            break;
        case 4:
            bonusPercent = .06;
            break;
        case 5:
            bonusPercent = .10;
            break;
        default:
            bonusPercent = 0;
    }
    bonusPercent = adjustBonusPercent(empNumber, bonusPercent, currentSalary);
    processedEmployee[0] = name;
    processedEmployee[1] = bonusPercent;
    bonusMoney = Math.round(bonusPercent * currentSalary);
    totalSalary = bonusMoney + currentSalary;
    processedEmployee[2] = totalSalary;
    processedEmployee[3] = bonusMoney;

    return processedEmployee;

}

function adjustBonusPercent(empNumber, bonusPercent, currentSalary){
    console.log("first parameter check ", bonusPercent)
    if(empNumber.length == 4){
        bonusPercent += .05;
    };

    if(currentSalary > 65000){
        bonusPercent -= .01;
    }

    if(bonusPercent > 0.13){
        bonusPercent = 0.13;
    }
    return bonusPercent;
}

for(var i = 0; i < employees.length; i++){
    console.log(calculateSTI(employees));
}
