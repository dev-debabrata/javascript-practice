const age = 23;
age >= 18 ? console.log('I like to drink Wine') : console.log('I like to drink Water');

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'Wine';
} else {
    drink2 = 'Water';
}
console.log(drink2);