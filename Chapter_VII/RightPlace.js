// Ex. III*

function solve(stringOne, char, stringTwo){
    let result = stringOne.replace('_', char);
    let output = result === stringTwo ? "Matched" : "Not Matched";
    console.log(output);
}

solve('Str_ng', 'I', 'Strong')