// Predict 1: In the following operation we want to print the elements of an array. To do that we use a for loop. Since the first index of the array is always (0) we start our iteration from 0 and because the last index of the arry is always one number les than the lenth of the array we use the (<) operator. 
var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

// Predict 2: Since we want to return the even element of the array, after we the loop we use the use the if statment and array i (if we use just i, it will return the indext number of our array). 
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

// Did not undrestand.
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);
