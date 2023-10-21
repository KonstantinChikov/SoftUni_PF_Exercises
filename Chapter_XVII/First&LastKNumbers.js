// Ex. III

function solve(arr){
    let firstSlice = arr.slice(1, arr[0] + 1);
    let secondSlice = arr.slice(2, arr[0] + 2);

    let bufferOne = "";
    let bufferTwo = "";
    for(let char of firstSlice){
        bufferOne += char + ' ';
    }
    for(let char of secondSlice){
        bufferTwo += char + ' ';
    }

    console.log(bufferOne);
    console.log(bufferTwo);

}

solve([
        2,
        7, 8, 9
      ])