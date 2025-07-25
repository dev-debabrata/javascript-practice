// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there 👋');
        console.log(this);
    }
}

const debu = new PersonCl('Debabrata Das', 1996);
console.log(debu);
debu.calcAge();
console.log(debu.age);

console.log(debu.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
debu.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();