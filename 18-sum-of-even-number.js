function sumOfEven(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(sumOfEven(10));



// function sumEven(n) {
//     let sum = 0;
//     for (let i = 2; i <= n; i += 2) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(sumEven(10));
