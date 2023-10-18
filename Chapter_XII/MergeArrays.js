// Ex. III

function solve(arr1, arr2) {

    const mergedArray = [];

    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            // If the index is even, add the sum of both elements
            mergedArray.push(String(Number(arr1[i]) + Number(arr2[i])));
        } else {
            // If the index is odd, add the concatenation of both elements
            mergedArray.push(arr1[i] + arr2[i]);
        }
    }

    console.log(mergedArray.join(" - "));
}

solve(  
        ['5', '15', '23', '56', '35'],
        ['17', '22', '87', '36', '11']
     )