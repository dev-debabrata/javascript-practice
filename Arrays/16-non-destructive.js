// Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



console.log(movements);
const reversedMov = movements.toReversed();
console.log(reversedMov);

// toSorted (sort), toSpliced (splice)

// movements[1] = 2000;
const newMovements = movements.with(1, 2000);
console.log(newMovements);

console.log(movements);