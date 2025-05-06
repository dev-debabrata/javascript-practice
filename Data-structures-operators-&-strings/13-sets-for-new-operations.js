'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[3]]: {
        open: 10,
        close: 22,
    },
    [weekdays[4]]: {
        open: 12,
        close: 24,
    },
    [weekdays[5]]: {
        open: 0,
        close: 25,
    },
};

const restaurant = {
    name: 'Indian Food',
    location: 'Kolkata, Egra, Digha, Kharagpur, Belda, Contai',
    categories: ['Vegetarian', 'Nonvegetarian', 'Fast-foods', 'Chinis Italian', 'Organic'],
    starterMenu: ['Momo', 'Salad', 'Garlic Bread'],
    mainMenu: ['Pizza', 'Pasta', 'Beriyani'],
    // es6 enhenced object literals
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivary({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address,
    }) {
        console.log(`Order recevie! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

const indianFoods = new Set([
    'Pasta',
    'Beriyani',
    'Pizza',
    'Garlic',
    'Tomatoes',
    'Rice',
]);

const italianFoods = new Set([
    'Pasta',
    'Beans',
    'Avacado',
    'Garlic',
    'Tomatoes',
    'Momos',
]);

const commonFoods = indianFoods.intersection(italianFoods);
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

const indianItalianFusion = indianFoods.union(italianFoods);
console.log('Union:', indianItalianFusion);

console.log([...new Set([...indianFoods, ...italianFoods])]);

const uniqueIndianFoods = indianFoods.difference(italianFoods);
console.log('Difference indian', uniqueIndianFoods);

const uniqueItalianFoods = italianFoods.difference(indianFoods);
console.log('Difference italian', uniqueItalianFoods);

const uniqueIndianAndItalianFoods = indianFoods.symmetricDifference(italianFoods);
console.log(uniqueIndianAndItalianFoods);

console.log(indianFoods.isDisjointFrom(italianFoods));