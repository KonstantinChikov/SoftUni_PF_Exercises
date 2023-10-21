// Ex. I

function findSmallest(a, b, c) {
    //a > b > c
    //a < b > c
    //a < b < c
    const smallest = Math.min(a, b, c);
    console.log(smallest);
}

findSmallest(2, 5, 3)