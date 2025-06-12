let arr = ['a', 'b', 'c', 'd', 'e'];

// slice method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(...arr);

// splice method
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['f', 'g', 'h', 'i', 'j'];
console.log(arr2.reverse());
console.log(arr2);

// Concat method
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join method
console.log(letters.join(' - '));