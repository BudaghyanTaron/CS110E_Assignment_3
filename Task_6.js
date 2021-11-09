/*Create a function that inverses and returns a given binary number. Example: 1101 -> 0010.*/
const prompt = require('prompt-sync')();

function binaryInverse(number){
    let i;
    let inverted = '';
    for(i = 0; i<number.length; i++){
        if(number[i] == 0){
            inverted = inverted + 1;
        }else{
            inverted = inverted + 0;
        }
    }
    return inverted;
}

let number = prompt("Enter Binary Number:");

console.log(`${number} inverted is ${binaryInverse(number)}`);