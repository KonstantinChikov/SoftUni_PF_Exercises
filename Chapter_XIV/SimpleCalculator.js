// Ex. V
//  Solve this task without using any conditional statements (no if or switch statements or ternary operators).

function calculator(N, M, operator) {

    function multiply() {
        return N * M;
    }
    function divide() {
        return N / M;
    } 
    function add() {
        return N + M;
    } 
    function subtract() {
        return N - M;
    } 
    const operations = {
        'multiply': multiply,
        'divide': divide,
        'add': add,
        'subtract': subtract
    };
    
    const result = operations[operator]?.();
    console.log(result);

    return result;
}

calculator(5, 5, 'multiply')