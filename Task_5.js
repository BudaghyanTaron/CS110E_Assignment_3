/*Create a function that sums two binary numbers. This function should put every digit of both binary numbers into two separate arrays, one for each 
argument, and make the length of those two arrays equal by adding zeros to the left of the shorter one (using the unshift method). Add those digits with 
the same index. Don’t forget to use the carry bit variable.*/
const prompt = require('prompt-sync')();

function sum(binary1, binary2){
    let i;
    let binArr1 = [];
    let binArr2 = [];
    const length1 = binary1.length;
    const length2 = binary2.length;

    for(i = 0; i < length1; i++){
        binArr1[i] = binary1[i];
    }
    for(i = 0; i < length2; i++){
        binArr2[i] = binary2[i];
    }
    
    
    if(length1 > length2){
        for(i = 0; i < length1-length2; i++){
            binArr2.unshift(0);
        }
    }else{
        for(i = 0; i < length2-length1; i++){
            binArr1.unshift(0);
        }
    }

    let sumArr = [];
    let carryBit = 0;
    for(i = length1 - 1; i >=0; i--){
        sumArr[i] = carryBit + parseInt(binArr1[i]) + parseInt(binArr2[i]);
        
        if(sumArr[i] < 2){
            carryBit = 0;
        }else {

            if(sumArr[i] === 2){
                sumArr[i] = 0;
            }else{
                sumArr[i] = 1;
            }

            carryBit = 1;
        }

    }
    if(carryBit === 1){
        sumArr.unshift(1);
    }
    return sumArr.join('');
}

let binary1 = prompt('Enter first Binary Number:');
let binary2 = prompt('Enter second Binary Number:');

console.log(`Sum of ${binary1} and  ${binary2} is ${sum(binary1, binary2)}`);
