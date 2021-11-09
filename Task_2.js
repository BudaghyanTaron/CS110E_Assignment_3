/*Create a function that takes two numbers as its arguments and returns an array that contains all the prime numbers between them inclusively. This function must 
call your function from question 1 to check each number. */
const prompt = require('prompt-sync')();

function isPrime(x){
    if(x<=1){
        return false;
    }
    let i;
    let count = 0;
    for(i=2;i<=Math.sqrt(x);i++){
        if(x%i===0)
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

function primesInRange(start, end){
    let i;
    let primes = [];
    let j = 0;
    for(i = start; i <= end; i++)
    {
        if(isPrime(i))
        {
            primes[j]=i;
            j++;
        }
    }
    return primes;

}

let start = prompt('Enter Range\'s starting point:')
let end = prompt('Enter Range\'s ending point:')

console.log(primesInRange(start,end));