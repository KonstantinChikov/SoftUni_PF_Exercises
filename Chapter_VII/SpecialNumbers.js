// Ex. IX

function solve(number){

    let clone  = number
    for (let i = 1; i <= clone; i++){

        let printableText = "";
        let sumOfDigits = 0;
        let j = i;
        while (j > 0) {
            sumOfDigits += j % 10;
            j = parseInt(j / 10);
        }

        if(sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11){
            printableText = "True";
        }else{
            printableText = "False";
        }

        console.log(i + " -> " + printableText);
    }
}

solve(15)