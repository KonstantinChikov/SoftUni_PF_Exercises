// Ex. V // second try

function calculator(a, b, operator) {
    let add = (a,b) => a+b;
    let subtract = (a,b) => a-b;
    let multiply = (a,b) => a*b;
    let divide = (a,b) => a/b;

    let operations = [
        add,
        subtract,
        multiply,
        divide
    ];

    let operationNames = [
        'add',
        'subtract',
        'multiply',
        'divide'
    ];

    let index;
    for(let i = 0; i < operationNames.length; i++){
        if(operationNames[i] == operator){
            index = i;
        }
    }

    let operation = operations[index];
    console.log(operation(a, b));

}

calculator(5, 5, 'multiply')