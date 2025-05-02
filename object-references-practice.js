const soma1 = {
    firstName: 'Soma',
    lastName: 'Maity',
    age: 27,
};

function marryPerson(originalPerson, newLastName) {
    originalPerson.lastName = newLastName;
    return originalPerson;
}

const marriedSoma = marryPerson(soma1, 'Das');

console.log('Before:', soma1);
console.log('After:', marriedSoma);

const Soma = {
    firstName: 'Soma',
    lastName: 'Maity',
    age: 27,
    familiy: ['Debu', 'Ram'],
};

// Shallow copy
const somaCopy = { ...Soma };
somaCopy.lastName = 'Das';

// jessicaCopy.familiy.push('Mary');
// jessicaCopy.familiy.push('John');

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// Deep copy/clone
const somaClone = structuredClone(Soma);
somaClone.familiy.push('Nikhil');
somaClone.familiy.push('Sham');

console.log('Original:', Soma);
console.log('Clone:', somaClone);