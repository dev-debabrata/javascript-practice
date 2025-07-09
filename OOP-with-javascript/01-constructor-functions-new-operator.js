const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never to this!
    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
};

const debu = new Person('Debu', 1997);
console.log(debu);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const nick = new Person('Nick', 2017);
const nikhil = new Person('Nikhil', 1975);

console.log(debu instanceof Person);

