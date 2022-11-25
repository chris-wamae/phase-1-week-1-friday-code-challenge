// Challenge 1: Student Grade Generator
function inputScore(studentScore) {
  if (studentScore >= 0 && studentScore <= 100) {
    return grader();
  } else {
    return "Please input a valid score between 0 and 100";
  }
  function grader(grade) {
    if (studentScore < 40) {
      grade = "E";
    } else if (studentScore >= 40 && studentScore <= 49) {
      grade = "D";
    } else if (studentScore >= 50 && studentScore <= 59) {
      grade = "C";
    } else if (studentScore >= 60 && studentScore <= 79) {
      grade = "B";
    } else if (studentScore >= 80) {
      grade = "A";
    }

    return `For a score of ${studentScore}, your grade is ${grade}`;
  }
}

//Challenge 2: Speed Detector
function speedLimitDetector(speed) {
  if (speed >= 0 && speed <= 70) {
    return "Ok";
  } else if (speed < 0) {
    return "Speed cannot be less than 0";
  } else if (speed > 70) {
    function demeriter() {
      let overSpeed;
      overSpeed = (speed - 70) / 5;
      let demeritPoints;
      demeritPoints = Math.ceil(overSpeed);
      if (demeritPoints >= 12) {
        return `You've accumulated ${demeritPoints} demerit points, your license is now suspended`;
      } else if (demeritPoints <= 11) {
        return `You've accumulated ${demeritPoints} demerit points, you are ${
          12 - demeritPoints
        } points away from license suspension`;
      }
    }
    return demeriter();
  }
}

//Net Salary Calculator 
//calculate Net Salary
//calaculate tax,nhif,nssf and substract them from Gross salary

/*nssf 
6% of earnings with a maximum of 1080

//Tax/PAYE
calculated after nssf duduction
10% upto 24,000
25% for 24,001 - 32,333 
30% above 32,333
personal relief = 2400
//nhif
calculated as a flat amount depending on the amount one earns
*/
function netSalaryCalculator(grossPay)
{
 let nssfAmount;
 if(grossPay * 0.06 > 1080)
 {nssfAmount = 1080}
 else
 {nssfAmount = grossPay * 0.06}
 return nssfAmount
}