const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const debu = new Person('Debu', 1997);
console.log(debu);




console.log(debu.__proto__);
// Object.prototype (top of prototype chain)
console.log(debu.__proto__.__proto__);
console.log(debu.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());

// const h1 = document.querySelector('h1');
console.dir(x => x + 1);