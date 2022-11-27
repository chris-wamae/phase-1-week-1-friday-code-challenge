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
function netSalaryCalculator(basicSalary,benefits=0) {
  let grossPay;
  grossPay = basicSalary + benefits
  let nssfAmount;
  if (grossPay * 0.06 > 1080) {
    nssfAmount = 1080;
  } else {
    nssfAmount = grossPay * 0.06;
  }
  let postNssf;
  postNssf = grossPay - nssfAmount;

  let tierOneRemainder;
  let payeTierOne;
  let tierTwoRemainder;
  let payeTierTwo;
  let tierThreeRemainder;
  let payeTierThree;

  payeTierOne = postNssf * 0.1;
  console.log(payeTierOne);
  if (payeTierOne <= 2400) {
    tierOneRemainder = postNssf;
  } else {
    tierOneRemainder = postNssf + 2400 - postNssf * 0.1;
  }
  console.log(tierOneRemainder);

  if (postNssf >= 24001) {
     if(tierOneRemainder - 24000 <= 32333){
      payeTierTwo = (tierOneRemainder - 24000) * 0.25}
    else{
      payeTierTwo = ((tierOneRemainder - 24000) -(tierOneRemainder - 32333)) * 0.25
    }

   tierTwoRemainder = tierOneRemainder - payeTierTwo

     }
   
  if (postNssf >= 32333)
  { payeTierThree = (tierTwoRemainder - 32333) * 0.3
    tierThreeRemainder = tierTwoRemainder - payeTierThree}

  let postNHIF;
  let nhifDeduction
  if(grossPay <= 5999)
  {nhifDeduction = 150
   postNHIF = - nhifDeduction}

   else if(grossPay <= 7999)
   {nhifDeduction = 300
    postNHIF = - nhifDeduction}

    else if(grossPay <= 11999)
    {nhifDeduction = 400
     postNHIF = - nhifDeduction}

     else if(grossPay <= 14999)
  {nhifDeduction = 500
   postNHIF = - nhifDeduction}

   else if(grossPay <= 19999)
  {nhifDeduction = 600
   postNHIF = - nhifDeduction}

   else if(grossPay <= 249999)
  {nhifDeduction = 750
   postNHIF = - nhifDeduction}

   else if(grossPay <= 29999)
  {nhifDeduction = 850
   postNHIF = - nhifDeduction}

   else if(grossPay <= 34999)
  {nhifDeduction = 900
   postNHIF = - nhifDeduction}

   else if(grossPay <= 39999)
  {nhifDeduction = 950
   postNHIF = - nhifDeduction}

   else if(grossPay <= 44999)
  {nhifDeduction = 1000
   postNHIF = - nhifDeduction}

   else if(grossPay <= 49999)
  {nhifDeduction = 1100
   postNHIF = - nhifDeduction}

   else if(grossPay <= 59999)
  {nhifDeduction = 1200
   postNHIF = - nhifDeduction}

   else if(grossPay <= 69999)
  {nhifDeduction = 1300
   postNHIF = - nhifDeduction}

   else if(grossPay <= 79999)
  {nhifDeduction = 1400
   postNHIF = - nhifDeduction}

   else if(grossPay <= 89999)
  {nhifDeduction = 1500
   postNHIF = - nhifDeduction}

   else if(grossPay <= 99999)
  {nhifDeduction = 1600
   postNHIF = - nhifDeduction}

   else if(grossPay > 100000)
  {nhifDeduction = 1700
   postNHIF = - nhifDeduction}

  console.log(`${nhifDeduction} is the nhifDeduction`)










  function returnSelector() {
    if (postNssf <= 24000) return tierOneRemainder;

    if (postNssf >= 24001 && postNssf <= 32333) return tierTwoRemainder;

    if(postNssf >= 32334) return tierThreeRemainder}
  

  return returnSelector();
  }
