/*Create a function that checks if a number is a palindrome by calling the functions from question 3. */
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

function isPalindrome(number){
    if(number === reverseNumber(number)){
        return true;
    }else{
        return false;

    }
    
}

let number = prompt('Enter Number:')

console.log(`${number} is Polindrom:${isPalindrome(number)}`);