function primeNumbers() {
    for (let i = 2; i <= 100; i++) {

        let prime = true;

        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }

        if (prime) console.log(i);
    }
}

primeNumbers();



// function isPrime(num) {
//     if (num <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// console.log(isPrime(11)); // true


// function primeNumbers() {
//     for (let i = 2; i <= 100; i++) {
//         if (isPrime(i)) console.log(i);
//     }
// }

// primeNumbers();


// function isPrime(num) {
//     if (num <= 1) return false;

//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function printPrimes() {
//     for (let i = 1; i <= 100; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// printPrimes();
