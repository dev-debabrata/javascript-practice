for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

const debu = [
    'Debabrata',
    'Das',
    2025 - 1997,
    'Web Developer',
    ['Ram', 'Nick', 'Nikhil'],
    true
];
const types = [];

for (let i = 0; i < debu.length; i++) {
    // Reading from debu arrary
    console.log(debu[i], typeof debu[i]);

    // Filling types array
    // types[i] = typeof.debu[i];
    types.push(typeof debu[i]);
}

console.log(types);

const years = [1997, 2002, 1991, 2010];
const ages = [];

for (let i = 0; i < debu.length; i++) {
    ages.push(2025 - years[i]);
}
console.log(ages);

// Continue and break
console.log('-----ONLY STRING-----');
for (let i = 0; i < debu.length; i++) {
    if (typeof debu[i] !== 'string') continue;

    console.log(debu[i], typeof debu[i]);
}

console.log('-----BREAK WITH NUMBERS-----');
for (let i = 0; i < debu.length; i++) {
    if (typeof debu[i] === 'number') break;

    console.log(debu[i], typeof debu[i]);
}