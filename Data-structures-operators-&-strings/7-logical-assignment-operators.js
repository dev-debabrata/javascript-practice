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

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

const rest1 = {
    name: 'Nikhil',
    numGuests: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Devdas',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ?? 10;
rest2.numGuests ?? 10;

// AND assignment operators
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

