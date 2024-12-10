// Coding Challenge #2

/*
    Use the BMI example from challenge #1, and the code you already wrote, and improve it:

    1.
        Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

    2.
        Use a template literal to include the BMI velues in the outputs. Example: " Mark's BMI(28.3) is higher than John's(23.9)!"

    Hint: Use an if/else statement.
*/

// 1.

//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;

const massMark = 92;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark/heightMark ** 2;
const BMIJhon = massJohn/(heightJohn * heightJohn);
console.log(BMIMark,BMIJhon);
if(BMIMark > BMIJhon) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

//2.

if(BMIMark > BMIJhon) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJhon}) !`);
} else {
    console.log(`John's BMI (${BMIJhon}) is higher than Mark's (${BMIMark}) !`);
}