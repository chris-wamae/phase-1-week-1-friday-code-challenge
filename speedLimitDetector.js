//Challenge 2: Speed Detector

//This program takes in speed through the speedLimitDetector function
//and returns demerit points

//Allows prompts to be added
const prompt = require("prompt-sync")({ sigint: true });

function speedLimitDetector(speed) {
  //This function takes in speed as an argument and ensures the input is valid
  let speedInput;
  speedInput = prompt("What is the speed?");
  speed = speedInput;
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
        console.log(
          `You've accumulated ${demeritPoints} demerit points, your license is now suspended`
        );
        return `You've accumulated ${demeritPoints} demerit points, your license is now suspended`;
      } else if (demeritPoints <= 11) {
        console.log(
          `You've accumulated ${demeritPoints} demerit points, you are ${
            12 - demeritPoints
          } points away from license suspension`
        );
        return `You've accumulated ${demeritPoints} demerit points, you are ${
          12 - demeritPoints
        } points away from license suspension`;
      }
    }
    return demeriter();
  }
}
speedLimitDetector();
