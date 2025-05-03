const age = '18';
if(age === 18) console.log('You just become adult (Strict)');
if(age == 18) console.log('You just become adult (loose)');

const favorite = Number(prompt("what's your favorite Number ?"));
console.log(typeof favorite);
if(favorite === 23) {      //22 === 23 - false
    console.log('Cool! 23 is an amezing number!');
} else if(favorite === 7) {
    console.log('7 is also a cool number');
} else if(favorite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}