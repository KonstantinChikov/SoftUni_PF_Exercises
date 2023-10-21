// Ex. II

function addSubtract(a, b, c) {
    
    function sum(m, n){
        return m + n;
    }

    function subtract(m, n) {
        return m - n;
    }

    let result1 = sum(a, b);
    let finalResult = subtract(result1, c);
    console.log(finalResult);
}

addSubtract(23, 6, 10)