'use strict';

const restaurant = {
    name: 'Indian Food',
    location: 'Kolkata, Egra, Digha, Kharagpur, Belda, Contai',
    categories: ['Vegetarian', 'Nonvegetarian', 'Fast-foods', 'Chinis Italian', 'Organic'],
    starterMenu: ['Momo', 'Salad', 'Garlic Bread'],
    mainMenu: ['Pizza', 'Pasta', 'Beriyani'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);


// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive to reture values from a function
const [starter, mainMenuAll] = restaurant.order(2, 0);
console.log(starter, mainMenuAll);

// Nested destructuring 
const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);