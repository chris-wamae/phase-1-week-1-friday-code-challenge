//Net Salary Calculator
//This program takes in the basicSalary and benefits and returns the net salary 
//after nssf,nhif and PAYE deductions.

//Allows prompts to be added 
const prompt = require("prompt-sync")({sigint:true})

function netSalaryCalculator(basicSalary, benefits = 0) 
//This function takes in the salary and benefits as the arguments and calculates the
//gross pay
{ let basicSalaryPrompt;
  let benefitsPrompt;
  basicSalaryPrompt = prompt("What is your basic salary?")
  basicSalary = basicSalaryPrompt;
  benefitsPrompt = prompt("Please enter your total benefits")
  benefits = benefitsPrompt;
  let grossPay;
  grossPay = (parseInt(basicSalary) + parseInt(benefits));
  console.log(`${grossPay} is the gross pay amount`);
//This if else statement calclates the nssf amount and deducts it 
//returning the remainderfunction numbers(functionParameter)
  let nssfAmount;
  if (grossPay * 0.06 > 1080) {
    nssfAmount = 1080;
  } else {
    nssfAmount = grossPay * 0.06;
  }
  let postNssf;
  postNssf = grossPay - nssfAmount;
  console.log(`${nssfAmount} is the nssf amount`);
  //console.log(`${postNssf} is the post nssf amount`);

  let tierOneRemainder;
  let payeTierOne;
  let tierTwoRemainder;
  let payeTierTwo;
  let tierThreeRemainder;
  let payeTierThree;

//calculates paye for the first tax bracket 
  payeTierOne = postNssf * 0.1;
  // console.log(`${payeTierOne} is first tax bracket tax amount`);
  if (payeTierOne <= 2400) {
    tierOneRemainder = postNssf;
  } else {
    tierOneRemainder = postNssf + 2400 - postNssf * 0.1;
  }
  //console.log(`${tierOneRemainder} is the first tax bracket return amount`);

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
 // console.log(`${payeTierTwo} is the second tax bracket tax amount`);
 // console.log(`${tierTwoRemainder} is the second tax bracket return amount`);

  //calculates paye for the third tax bracket
  if (postNssf >= 32333) {
    payeTierThree = (tierTwoRemainder - 32333) * 0.3;
    tierThreeRemainder = tierTwoRemainder - payeTierThree;
  }
//  console.log(`${payeTierThree} is the  third tax bracket return amount`);

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
  console.log(returnSelector())
  return returnSelector();
}
netSalaryCalculator()