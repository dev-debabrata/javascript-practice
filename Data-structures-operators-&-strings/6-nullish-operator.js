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

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (Not 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);