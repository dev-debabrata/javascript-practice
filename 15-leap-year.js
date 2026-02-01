function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}


console.log(isLeapYear(2024));






// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// console.log(isLeapYear(2024)); // true



// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
//         ? "Leap Year"
//         : "Not a Leap Year";
// }
