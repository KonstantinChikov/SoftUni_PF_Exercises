// Ex. VIII*

function solve(firstNumber, operator, secondNumber) {

    let result = 0; 

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            console.log("Error! Unknown operator used!");
            break;
    }    
    console.log(result.toFixed(2));
}

solve(5, '+', 10)