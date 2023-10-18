// Ex. IV

function solve(arr, rotationCount) {
    for(let rotation = 1; rotation <= rotationCount; rotation++){
        let firstEl = arr.shift();  // ".shift()" --> gets the first element of the given array!
        arr.push(firstEl);  // ".push()" --> pushes the given element to the back of the array!
    }

    console.log(arr.join(' '));   // ".join()" --> joins the array in one string with a specific format!
}

solve([51, 47, 32, 61, 21], 2)