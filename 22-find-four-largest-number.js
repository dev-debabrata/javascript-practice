function findLargest(a, b, c, d) {

    if (a >= b && a >= c && a >= d) {
        return a + " is the Largest Number";
    } else if (b >= a && b >= c && b >= d) {
        return b + " is the Largest Number";
    } else if (c >= a && c >= b && c >= d) {
        return c + " is the Largest Number";
    } else {
        return d + " is the Largest Number";
    }
}

console.log(findLargest(10, 20, 30, 40));


// function largestFour(a, b, c, d) {
//     return Math.max(a, b, c, d);
// }

// console.log(largestFour(10, 40, 20, 30));
