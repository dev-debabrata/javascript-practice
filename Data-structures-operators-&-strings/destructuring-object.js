'use strict';

const restaurant = {
    name: 'Indian Food',
    location: 'Kolkata, Egra, Digha, Kharagpur, Belda, Contai',
    categories: ['Vegetarian', 'Nonvegetarian', 'Fast-foods', 'Chinis Italian', 'Organic'],
    starterMenu: ['Momo', 'Salad', 'Garlic Bread'],
    mainMenu: ['Pizza', 'Pasta', 'Beriyani'],
    openingHours: {
        thu: {
            open: 10,
            close: 22,
        },
        fri: {
            open: 12,
            close: 24,
        },
        sat: {
            open: 0,
            close: 25,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivary: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address,
    }) {
        console.log(`Order recevie! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};

restaurant.orderDelivary({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivary({
    address: 'Via del Sole, 21',
    starterIndex: 1,
})

const { name, openingHours, categories } = restaurant;;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 1000;
const obj = { a: 12, b: 22, c: 25 };
({ a, b } = obj);
console.log(a, b);

// Nested object
const {
    fri: { open: o, close: c },
} = openingHours;
console.log(o, c);