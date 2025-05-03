// Backword looping
const debu = [
    'Debabrata',
    'Das',
    2025 - 1997,
    'Web Developer',
    ['Ram', 'Nick', 'Nikhil'],
    true
];

for (let i = debu.length - 1; i >= 0; i--) {
    console.log(debu[i]);
}

// Loops in Loops
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------String exercise ${exercise}`);

    for (let rep = 0; rep < 6; rep++) {
        console.log(`Exercise ${exercise} Lifting weights repetition ${rep}`);

    }
}