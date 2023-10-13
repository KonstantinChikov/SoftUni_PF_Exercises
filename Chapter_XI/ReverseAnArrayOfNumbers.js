// Ex. III --> Write a program, which receives a number n and an array of elements. 
//              Your task is to create a new array with n numbers from the original array, 
//              reverse it and print its elements on a single line, space-separated.

function solve(n, inputArr) {
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(inputArr[i])
    }

    let output = "";
    for(let i = arr.length-1; i >= 0; i--){
        output += `${arr[i]} `
    }

    console.log(output);
}

solve(3, [10, 20, 30, 40, 50])