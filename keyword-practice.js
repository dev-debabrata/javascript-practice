const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
};
calcAge(1997);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
};
calcAgeArrow(1990);

const debu = {
    year: 1997,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};

debu.calcAge();


const ram = {
    year: 2017,
};

ram.calcAge = debu.calcAge;
ram.calcAge();

const f = debu.calcAge;
f();