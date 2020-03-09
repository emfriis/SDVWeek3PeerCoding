console.log(1 + 2, 3 + 4); // Evaulates and prints 2 simple expressions separated by a comma operator.
console.log(5 + 6, 7 + 8); // Evaulates and prints 2 simple expressions separated by a comma operator.
console.log(8 + 9, 10 + 11); // Evaulates and prints 2 simple expressions separated by a comma operator.

console.log(3 + 4, 5 + 6, 7 + 8); // Evaulates and prints 3 simple expressions separated by a comma operator.
let commaOperatorCalc = (3 + 4, 5 + 6, 7 + 8); // Assigns the result of evaluating 3 simple expressions separated by a comma operator to a variable.
console.log(commaOperatorCalc); // Prints the resulting value of the variable, showing only the evaluation of the last expression.

let numThird = 4; // Assings numeric value 4 to variable numThird.
let numFourth = 8; // Assings numeric value 4 to variable numFourth.

console.log(numThird = numFourth); // Evaluates expression with assignment operator.
console.log(numThird += numFourth); // Evaluates expression with assignment operator.
console.log(numThird -= numFourth); // Evaluates expression with assignment operator.
console.log(numThird *= numFourth); // Evaluates expression with assignment operator.
console.log(numThird /= numFourth); // Evaluates expression with assignment operator.
console.log(numThird %= numFourth); // Evaluates expression with assignment operator.

let numFifth = 9; // Assigns numeric value 9 to variable numFifth.
let numSixth = 20; // Assigns numeric value 20 to variable numSixth.

console.log(numFifth); // Prints numFifth variable initial value.
console.log(10 * ++numFifth); // Evaluates expression using numeric operator and incrementing variable numFifth.
console.log(numFifth); // Prints numFifth variable final value.

console.log(10 == '10'); // Evaluates expression with comparison operator.
console.log(10 === '10'); // Evaluates expression with comparison operator.
console.log(5 != '5'); // Evaluates expression with comparison operator.
console.log(5 !== '5'); // Evaluates expression with comparison operator.
console.log(5 > '10'); // Evaluates expression with comparison operator.
console.log(5 < '10'); // Evaluates expression with comparison operator.
console.log(10 > 'a'); // Evaluates expression with comparison operator, comparing numbers to non-numeric strings always returns false.