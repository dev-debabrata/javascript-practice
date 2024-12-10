// Coding Challenge #5

/*
    Back to the two gymnastics team, the Dolphins and the koalas: There is a new gymnastics discipline, which works differently.
    Each team competes 3 times, and then the average of the 3 score id calculated (So one average score per team).
    A team only wins if it has at least Double the average score of the other team. other wise, no team wins!
    
    1. Create an arrow function 'calcAge' to calculate the average of 3 score.
    2. Use the function to calculate the average for both teams.
    3. Create a function 'checkWinner' that takes the average score of each team an parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory poins, according to the rule above. Example : "Koalas win (30 vs 13)".
    4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2.
    5. Ignore draws this time.

    Test Data 1 : Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49.
    Test Data 2 : Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27.

    HINT : To calculate average of 3 values, add then all together and divide by 3
    HINT : To check if number A is at least double number B, check for A >= 2 * B. Apply this to the teams average scores. 
*/



const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log (calcAverage (3, 4, 5));

// Test Data 1

let scoreDolphins = calcAverage (44, 23, 71);
let scoreKoalas = calcAverage (65, 54, 49);
console.log (scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log (`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log (`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log ('No team wins ...');
    }
}
checkWinner (scoreDolphins, scoreKoalas);
checkWinner (576, 111);

// Test Data 2

scoreDolphins = calcAverage (85, 54, 41);
scoreKoalas = calcAverage (23, 34, 27);

console.log (scoreDolphins, scoreKoalas);
checkWinner (scoreDolphins, scoreKoalas);