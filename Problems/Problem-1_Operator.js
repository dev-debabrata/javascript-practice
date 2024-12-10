// Coding Challenge #1

/*   
    Mark and John are trying to compare their BMI (Body Mass Index), Which is calculate using the formula : BMI = mass/height ** 2 = 
    (mass in kg and height in meter).
    1. Store Mark's and john's mass and height in variables.
    2. calculate both their BMI using the formula (you can even implement both version).
    3. Create a boolean variable 'markHeightBMI' containing information about wheather Mark has a higher BMI than John.
    Test Data 1 : Marks weight 78 kg and height 1.69 m tall.
                  John weight 92 kg and height 1.95 m tall.
    Test Data 2 : Marks weight 95 kg and height 1.88 m tall.
                  John weight 85 kg and height 1.76 m tall.
*/  

                
//  Test Data 1.

//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;

//  Test Data 2.

const massMark = 92;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark/heightMark ** 2;
const BMIJhon = massJohn/(heightJohn * heightJohn);
const markHeightBMI = BMIMark > BMIJhon;

console.log(BMIMark, BMIJhon, markHeightBMI);
