/*

Let's go back to Mark and Debu comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and debu, and their properties exactly as fullName, mass and height.

2. Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "Debabrata Das's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. Debu weighs 92 kg and is 1.95 m tall.

*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const debu = {
    fullName: 'Debabrata Das',
    mass: 90,
    height: 1.89,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
debu.calcBMI();

console.log(mark.bmi, debu.bmi);

if (mark.bmi > debu.bmi) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${debu.fullName}'s BMI ${debu.bmi}`);
} else if (debu.bmi > mark.bmi) {
    console.log(`${debu.fullName}'s BMI ${debu.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}`);
}