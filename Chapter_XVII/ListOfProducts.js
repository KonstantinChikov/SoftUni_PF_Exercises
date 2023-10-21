// Ex. VII

function solve(arr) {

    let sorted = arr.sort();
    let index = 0;
    for(let products of sorted){
        index++;
        console.log(`${index}.${products}`);
    }
}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])