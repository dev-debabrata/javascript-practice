const debu = {
    firstName: 'Debu',
    year: 1997,
    calcAge: function () {

        console.log(2037 - this.year);

        // Solution 1 regular function

        // const self = this; // self or that
        // const isMillenial = function () {
        //   console.log(self);
        //   console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // Solution 2 arrow function
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2, 5, 8);