const friends = ['Debu', 'Nikhil', 'Ram'];

// Add elements
// friends.push('Nick');
const newLength = friends.push('Nick');
console.log(friends);
console.log(newLength);

friends.unshift('Devdas')
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Nikhil'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Nikhil'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

