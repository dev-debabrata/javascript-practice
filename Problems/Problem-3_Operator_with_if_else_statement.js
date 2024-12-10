// Coding Challenge #3

/* 
    1. Calculate the avarage score for each time, using the test-data below.
    2. Compare the teames avarage scores to determine the winner of the compitition, and print it to the console. Don't forget that
    there can be a drow, So test for that as well (drow means by have the same avarage score.)

    3. BONUS 1 : Include a requirement for a minimum score of 100, with this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 ponts.

    HINT : Use a Logical Operator to test for minimum score, as well as multiple else-if blocks.

    4. BONUS 2 : Minimum score also applies to a drow ? So a drow only happens when both teams have the same score and both have a score greater or equle 100 ponts. Other wise, no team wins the trophy.

    Test Data : Dolphins score 96, 108 and 89. 
                Koalas score 88,91 and 110.
    
    Test Data BONUS 1 : Dolphins score 97, 112 and 101.
                  Koalas score 109, 95 and 123.
    
    Test Data BONUS 2  : Dolphins score 97, 112 and 101.
                         Koalas score 109, 95 and 106.
*/

// 1.
/*
const scoreDolphins = (95 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);
if(scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if(scoreDolphins < scoreKoalas) {
    console.log('Koales win the trophy');
} else if(scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy');
}
*/

// BONUS 1 & 2 Include

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKoalas);
if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy');
} else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No one win the trophy');
}