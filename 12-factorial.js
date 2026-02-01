// function factorial(n) {
//     if (n < 0) return null;

//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(5))


function factorial(n) {

    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(factorial(5));
