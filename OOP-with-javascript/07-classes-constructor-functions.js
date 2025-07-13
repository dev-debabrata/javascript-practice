const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const debu = new Student('Debabrata Das', 2020, 'Computer Science');
debu.introduce();
debu.calcAge();

console.log(debu.__proto__);
console.log(debu.__proto__.__proto__);

console.log(debu instanceof Student);
console.log(debu instanceof Person);
console.log(debu instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);