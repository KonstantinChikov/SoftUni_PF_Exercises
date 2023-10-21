// Ex. VI

function solve(arr) {
    let sortedAscending = arr.sort((a, b) =>{
        return a - b;
    });


    let buffer = "";
    let sliced = sortedAscending.slice(0,2);
    for(let piece of sliced){
        buffer += piece + ' ';
    }

    console.log(buffer);
}

solve([30, 15, 50, 5])
solve([3, 0, 10, 4, 7, 3])