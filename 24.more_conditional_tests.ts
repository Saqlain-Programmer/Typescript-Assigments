// Equality and Inequality Test 1
console.log("Equality test with strings: ", "Apple" === "Apple");
// Equality and Inequality Test 2
console.log("Inequality test with strings: ", ("Apple" as string) != "Orange");

// Tests using the lower case function
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");

// Numerical tests inviolving equality 
console.log("Equality test with numbers: ", 26 === 26);
// Numerical tests inviolving inequalty
console.log("Inequality test with numbers: ", (26 as number) != 35);

// greater than test
console.log("Greater than test: ", 10 > 5);
// less than test
console.log("Less than test: ", 5 < 10);

// greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
//less than or equal to 
console.log("less than or equal to test: ", 5 <= 10 );

//Tests using "and" and operator
console.log("And operator test:", 5===5 && 10 > 5);
//Tests using "or" operator
console.log("or operator test:", 5===5 || false);

//Test wether an item is in  a array 
const fruits :string[] = ['Avocado', 'PineApple', 'Mango'];
console.log('Test "Avocado" in the array: ', fruits.includes("Avocado"));

//Test wether an item is not in a array 
console.log('Testing "Banana" is not in array' , !fruits.includes('Banana'));
