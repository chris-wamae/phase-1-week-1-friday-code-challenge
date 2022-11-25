// Challenge 1: Student Grade Generator
// input = 0 - 100
//Grade = A > 79,
// B - 60 to 79,
// C -  59 to 49,
// D - 40 to 49,
// E - less 40,

function inputScore(studentScore) {
    if (studentScore >= 0 && studentScore <= 100) {
        return grader();
      }
    else{ return "Please input a valid score between 0 and 100"}
  function grader(grade) {
    if (studentScore < 40) {
      grade = "E";
    }
    else if(studentScore >= 40 && studentScore <= 49 )
    {grade = "D"}

    else if(studentScore >=50 && studentScore <=59 )
    {grade = "C"}
    
    return `For a score of ${studentScore}, your grade is ${grade}`;
  }

 
}
