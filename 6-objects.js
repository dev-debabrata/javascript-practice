const debu = {
    firstName: 'Debabrata',
    lastName: 'Das',
    birthYear: 1997,
    job: 'Web Developer',
    friends: ['Debu', 'Nick', 'Nikhil'],
    hasDrivesLicense: true,

    //     calcAge: function (birthYear) {
    //         return 2025-birthYear;
    //     }

    // calcAge: function () {
    //     console.log(this);
    //     return 2025 - this.birthYear;
    // }


    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${debu.job}, and he has ${this.hasDrivesLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(debu.calcAge());

console.log(debu.age);

// Problem
// "Debabrata is a 28-year old Web Developer, and he has a driver's license."

console.log(debu.getSummary());
