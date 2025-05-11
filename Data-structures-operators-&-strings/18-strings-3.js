// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Debabrata Das'.split(' '));

const [firstName, lastName] = 'Debabrata Das'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
};

capitalizeName('soma ann smith debus');
capitalizeName('debabrata das');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Debu'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(6345262));
console.log(maskCreditCard(2636474875843));
console.log(maskCreditCard('337384748458574847484'));

// Repeat 
const message2 = 'Bad weather... All Departues Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'😁'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);