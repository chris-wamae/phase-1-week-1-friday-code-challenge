// Challenge 1: Student Grade Generator

//This program takes in a score through the inputScore function and returns
//a grade depending on the score

function inputScore(studentScore)
//This is a function that takes in a students score as an agrument and ensure
//the score provided is valid 
{
  if (studentScore >= 0 && studentScore <= 100) {
    return grader();
  } else {
    return "Please input a valid score between 0 and 100";
  }

//This function returns a grade depending on the score provided in
//the first function 

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

//This program takes in speed through the speedLimitDetector function
//and returns demerit points

function speedLimitDetector(speed)
//This function takes in speed as an argument and ensures the input is valid
{
  if (speed >= 0 && speed <= 70) {
    return "Ok";
  } else if (speed < 0) {
    return "Speed cannot be less than 0";
  } else if (speed > 70) {
  //This function takes the speed, calculates the speed above the limit 
  //,calculates the demerit points and finally logs them 
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
//This program takes in the basicSalary and benefits and returns the net salary 
//after nssf,nhif and PAYE deductions.


function netSalaryCalculator(basicSalary, benefits = 0) 
//This function takes in the salary and benefits as the arguments and calculates the
//gross pay
{
  let grossPay;
  grossPay = basicSalary + benefits;
  console.log(`${grossPay} is the grossPay amount`);
//This if else statement calclates the nssf amount and deducts it 
//returning the remainder
  let nssfAmount;
  if (grossPay * 0.06 > 1080) {
    nssfAmount = 1080;
  } else {
    nssfAmount = grossPay * 0.06;
  }
  let postNssf;
  postNssf = grossPay - nssfAmount;
  console.log(`${nssfAmount} is the nssf amount`);
  console.log(`${postNssf} is the post nssf amount`);

  let tierOneRemainder;
  let payeTierOne;
  let tierTwoRemainder;
  let payeTierTwo;
  let tierThreeRemainder;
  let payeTierThree;

//calculates paye for the first tax bracket 
  payeTierOne = postNssf * 0.1;
  console.log(`${payeTierOne} is first tax bracket tax amount`);
  if (payeTierOne <= 2400) {
    tierOneRemainder = postNssf;
  } else {
    tierOneRemainder = postNssf + 2400 - postNssf * 0.1;
  }
  console.log(`${tierOneRemainder} is the first tax bracket return amount`);

//calculates paye for the second tax bracket
  if (postNssf >= 24001) {
    if (tierOneRemainder - 24000 <= 32333) {
      payeTierTwo = (tierOneRemainder - 24000) * 0.25;
    } else {
      payeTierTwo =
        (tierOneRemainder - 24000 - (tierOneRemainder - 32333)) * 0.25;
    }

    tierTwoRemainder = tierOneRemainder - payeTierTwo;
  }
  console.log(`${payeTierTwo} is the second tax bracket tax amount`);
  console.log(`${tierTwoRemainder} is the second tax bracket return amount`);

  //calculates paye for the third tax bracket
  if (postNssf >= 32333) {
    payeTierThree = (tierTwoRemainder - 32333) * 0.3;
    tierThreeRemainder = tierTwoRemainder - payeTierThree;
  }
  console.log(`${payeTierThree} is the  third tax bracket return amount`);

  //calculates nhif amount depending on the grossPay
  let nhifDeduction;
  if (grossPay <= 5999) {
    nhifDeduction = 150;
  } else if (grossPay <= 7999) {
    nhifDeduction = 300;
  } else if (grossPay <= 11999) {
    nhifDeduction = 400;
  } else if (grossPay <= 14999) {
    nhifDeduction = 500;
  } else if (grossPay <= 19999) {
    nhifDeduction = 600;
  } else if (grossPay <= 24999) {
    nhifDeduction = 750;
  } else if (grossPay <= 29999) {
    nhifDeduction = 850;
  } else if (grossPay <= 34999) {
    nhifDeduction = 900;
  } else if (grossPay <= 39999) {
    nhifDeduction = 950;
  } else if (grossPay <= 44999) {
    nhifDeduction = 1000;
  } else if (grossPay <= 49999) {
    nhifDeduction = 1100;
  } else if (grossPay <= 59999) {
    nhifDeduction = 1200;
  } else if (grossPay <= 69999) {
    nhifDeduction = 1300;
  } else if (grossPay <= 79999) {
    nhifDeduction = 1400;
  } else if (grossPay <= 89999) {
    nhifDeduction = 1500;
  } else if (grossPay <= 99999) {
    nhifDeduction = 1600;
  } else if (grossPay > 100000) {
    nhifDeduction = 1700;
  }

  console.log(`${nhifDeduction} is the nhifDeduction`);

//This function picks the correct return value as the net salary depending on the 
//inputed basic salary and benefits
  function returnSelector() {
    let netPay;
    if (postNssf <= 24000) {
      netPay = Math.ceil(tierOneRemainder - nhifDeduction);
    }

    if (postNssf >= 24001 && postNssf <= 32333) {
      netPay = Math.ceil(tierTwoRemainder - nhifDeduction);
    }

    if (postNssf >= 32334) {
      netPay = Math.ceil(tierThreeRemainder - nhifDeduction);
    }

    return `${netPay} is the netPay`;
  }
  return returnSelector();
}
