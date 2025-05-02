const airIndia = {
    airline: 'Air India',
    iataCode: 'AI',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

// airIndia.book(239, 'Debabrata Das');
// airIndia.book(635, 'Nick Das');

const indigo = {
    airline: 'IndiGo',
    iataCode: '6E',
    bookings: [],
};

const book = airIndia.book;


// The bind Method
const book6E = book.bind(indigo);
const bookAI = book.bind(airIndia);

book6E(23, 'Debu Das');

const book6E23 = book.bind(indigo, 23);
book6E23('Debabrata Das');
book6E23('Nikhil Das');

// With Event Listeners
airIndia.planes = 300;
airIndia.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
// airIndia.buyPlane();

document
    .querySelector('.buy')
    .addEventListener('click', airIndia.buyPlane.bind(airIndia));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));