function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;

            // Create a new variable with same name as outer scopes variable 
            const firstName = 'Ram';

            // Reassigning outer scope variable
            output = 'NEW OUTPUT';

            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        console.log(millenial);

        console.log(output);
    }

    printAge();

    return age;
}

const firstName = 'Debu';
calcAge(1991);