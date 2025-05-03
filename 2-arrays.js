const friends1 = 'Debu';
const friends2 = 'Ram';
const friends3 = 'Nick';

const friends = ['Debu', 'Ram', 'Nick'];
console.log(friends);

const years1 = new Array(1991, 1995, 1997, 2008);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Sham';
console.log(friends);

const firstName = 'Debabrata';
const debu = [firstName, 'Das', 2030 - 1997, 'developer', friends];
console.log(debu);
console.log(debu.length);

// Exercise
const calcAge = function (birthYear) {
    return 2030 - birthYear;
}
const years2 = [1990, 1994, 1997, 2005, 2025];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(ages);
