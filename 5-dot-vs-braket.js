const debu = {
    firstName: 'Debabrata',
    lastName: 'Das',
    age: 2025 - 1997,
    job: 'Web Developer',
    friends: ['Debu', 'Nick', 'Nikhil']
};
console.log(debu);

console.log(debu.lastName);
console.log(debu['lastName']);

const nameKey = 'Name';
console.log(debu['first' + nameKey]);
console.log(debu['last' + nameKey]);

const interestedIn = prompt('What do you want know about Debu? Choose between firstName, lastName, age, job and friends');

if (debu[interestedIn]) {
    console.log(debu[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

debu.location = 'Kolkata';
debu['twitter'] = '@debabratadas';
console.log(debu);

// Problem
// "Debu has 3 friends, and his best friends is called Nick"
console.log(`${debu.firstName} has ${debu.friends.length} friends, and his best friend is called ${debu.friends[0]}`);