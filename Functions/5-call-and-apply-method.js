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

airIndia.book(239, 'Debabrata Das');
airIndia.book(635, 'Nick Das');

const indigo = {
    airline: 'IndiGo',
    iataCode: '6E',
    bookings: [],
};

const book = airIndia.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(indigo, 23, 'Ram Das');
console.log(indigo);

book.call(airIndia, 239, 'Sham Das');
console.log(airIndia);

const airIndiaExpress = {
    airline: 'Air India Express',
    iataCode: 'IX',
    bookings: [],
};

book.call(airIndiaExpress, 583, 'Debu Das');

// Apply method
const flightData = [583, 'Nikhil Das'];
book.apply(airIndiaExpress, flightData);
console.log(airIndiaExpress);

book.call(airIndiaExpress, ...flightData);