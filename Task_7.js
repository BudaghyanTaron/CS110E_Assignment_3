/*Create a function that converts a given binary number into its two’s-complement negative number. This function must call the functions from 
questions 5 and 6 (Inverse + 1).*/
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

function binaryInverse(number){
    let i;
    let inverted = "";
    for(i = 0; i<number.length; i++){
        if(number[i] == 0){
            inverted = inverted + 1;
        }else{
            inverted = inverted + 0;
        }
    }
    return inverted;
}

function converter(number){
    return sum(binaryInverse(number),"1");
}

let number = prompt("Enter Binary Number:");

console.log(`${number} converted into negative is ${converter(number)}`);