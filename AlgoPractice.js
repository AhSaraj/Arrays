// Challenge 1: Print Values and Sum: 
var sum =0
var testArr = [6,3,5,1,2,4];
for(let i = 0; i < testArr.length; i++){
    sum +=testArr[i]
    console.log(`num: ${testArr[i]} sum: ${sum}`)
}

// Challenge 2: Value * Position

// Multiply each value in the array by its array position
// The expected output will be:

var testArr = [6,3,5,1,2,4];
for(let i = 0; i <testArr.length; i++){
   testArr[i]=testArr[i]*i;
    
}console.log(testArr)

var testArr = [6,3,5,1,2,4];
for(let i = 0; i <testArr.length; i++){
   testArr[i] *= i;
    
}console.log(testArr)