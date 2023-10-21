// Ex. II

function negativeOrPositiveNumbers(arr){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            result.unshift(arr[i]);     // ".unshift()" --> adds the element infront of the array.
        }else{
            result.push(arr[i]);        // ".push()" --> adds the element into the back of the array.
        }
    }

    console.log(result.join('\n'));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])