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



console.log(Person.prototype);

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

debu.calcAge();
nick.calcAge();

console.log(debu.__proto__);
console.log(debu.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(debu));
console.log(Person.prototype.isPrototypeOf(nick));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(debu.species, nick.species);

console.log(debu.hasOwnProperty('firstName'));
console.log(debu.hasOwnProperty('species'));