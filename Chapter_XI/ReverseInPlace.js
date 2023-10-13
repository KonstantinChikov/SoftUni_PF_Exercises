// Ex. IV --> Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array. 
//              Print the resulting elements on a single line, space-separated.

function solve(arr) {

    let output = "";
    for(let i = arr.length-1; i >= 0; i--){
        output += `${arr[i]} `
    }

    console.log(output);
}

solve(['a', 'b', 'c', 'd', 'e'])