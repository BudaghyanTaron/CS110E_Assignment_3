/*Create a function that returns the reverse number of a given number. Example: input = 123 -> returns: 321.*/
const prompt = require('prompt-sync')();

function reverseNumber(number){
    let i;
    let newNumber="";
    for(i = number.length-1; i>=0; i--)
    {
        newNumber += number[i];

    }
    return newNumber;
}

let number = prompt('Enter Number:');

console.log(`${number}'s reverse is: ${reverseNumber(number)}`);