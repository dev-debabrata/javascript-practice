function findLargest(a, b) {
    if (a > b) {
        return a + " is the Largest Number";
    } else if (b > a) {
        return b + " is the Largest Number";
    } else {
        return "Both numbers are Equal";
    }
}

console.log(findLargest(10, 10));



// function largestTwo(a, b) {
//     return a > b ? a : b;
// }

// console.log(largestTwo(10, 20));
