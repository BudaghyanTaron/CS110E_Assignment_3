/*Create a function that takes a number as its argument and returns true if a  number is a prime number and false otherwise. Hint: A number is a prime 
number when it is divisible only by one and itself. If a number is not divisible to any number starting 2 to the SQRT of itself, then that number is a prime  number.*/
const prompt = require('prompt-sync')();

function isPrime(number){
    if(number<=1){
        return false;
    }
    let i;
    let count = 0;
    for(i=2;i<=Math.sqrt(number);i++){
        if(number%i===0)
        {
        count++;
        }
    }
    if(count===0){
        return true;
    }else{
        return false;
    }
}

let number = prompt('Enter Number: ');

console.log(`${number} is prime:${isPrime(number)}`);