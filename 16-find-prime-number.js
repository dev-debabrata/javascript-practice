function isPrime(num) {
    if (num <= 1) return "Not Prime";

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return "Not Prime Number";
    }
    return "Prime Number";
}

console.log(isPrime(10));


// function isPrime(num) {
//     if (num <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// console.log(isPrime(11)); // true
