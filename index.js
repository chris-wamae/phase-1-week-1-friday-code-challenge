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
//a program that takes as input the speed
//less than 70, it should print “Ok”
//every 5 km/s above the speed limit (70)
//one demerit point and print the total number of demerit points.
//more than 12 points, the function should print: “License suspended”
function speedLimitDetector(speed) {
  if (speed >= 0 && speed <= 70) {
    return "Ok";
  }

    else if (speed < 0) {
    return "Speed cannot be less than 0";
  }

    else if (speed > 70) {
    function demeriter() {
      let overSpeed;
      overSpeed = (speed - 70) / 5;
      let demeritPoints;
      demeritPoints = Math.ceil(overSpeed);
      if(demeritPoints >= 12)
      {return `You have accumulated ${demeritPoints} demerit points,your license is now suspended`}
    }
  }
  return demeriter();
}
