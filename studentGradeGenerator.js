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