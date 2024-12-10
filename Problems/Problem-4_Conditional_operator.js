// Coding Challenge #4

/*
    Steven wants to bulid a very simple tip calculator for whenever he gose eating in a resturent. In his country, it's usual to tip 15%
    if the bill value is between 50 and 300 if the value is different, the tip is 20%.
    
    1.  Your task is to calculate the tip depending on the bill value, create a veriable called 'tip' for this. It's not allowed the use an if/else statement (if it's easier for you, you can start with an if/else statement, and then try to convert it to a Ternary oprerator.)

    2.  Print a string to the console containing the bill value the tip, and the final value (bill+tip).
    Example : 'The bill was 275, the tip was 41.25, and the total value 316.25'

    HINT 1 : To calculate 20% of a value, simply multiply it by 20/100 = 0.2
    HINT 2 : value X is between 50 and 300, if it's >= 50 && <= 300
*/

const bill = 275;
const tip = bill <=300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);