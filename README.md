# Introduction and content description

This repository contains code for three Javascript programs contained separately in the studentGradeGenerator.js file, speedLimitDetector.js file and the netSalaryCalculator.js file.
The first program is the Student Grade Generator, the second is the Speed Limit
Detector and finally the Net Salary Calculator

## Student Grade Generator

This program takes an input of a score between 0 and 100 and returns a relevant grade depending on the input given
The Grades are either A,B,C,D or E. An A is given for a score above 80, B for a score above 60, C for a score above 50, D for a score above 40 and an E is given for a score below 40.

## Speed Limit Detector

This program takes an input of speed and depending on how high the speed is returns an okay or returns demerit points if the speed is above the speed limit.
If the speed reaches or exceeds 130 at which point 12 demerit points will have been accumulated the program suspends the license

Note: In the Speed Detector program I have implimented a bracket system for demeriter points such that the return value for demeriter points is always an interger. For example, a speed input of 71 should return 0.2 demeriter points and a speed of 74 should return 0.8 but they both return 1 demeriter point.

## Net Salary Calculator

This program takes an input of basic salary as well as benefits and returns the net salary after decucting payments for NSSF, NHIF as well as PAYE. It also factors in personal relief.

### Program usage

To use the Student Grade Generator call the function inputScore and add a score as the argument eg.

inputScore(20)

To use the Speed Limit Detector call the function speedLimitDetector and add speed as the argument eg.

speedLimitDetector(100)

To use the Net Salary Calculator call the function netSalaryCalculator and add the basic salary plus the benefits eg.

netSalaryCalculator(30000,4000)

##### Author and License

Author: Christopher Wamae
License: Open source license
