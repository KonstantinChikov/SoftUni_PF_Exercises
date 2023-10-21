// Ex. VIII

function perfectNumber(num){
    let sumOfproperDivisors = 0;

    for(let divisor  = 1; divisor < num; divisor++){
        if(num % divisor == 0){
            sumOfproperDivisors += divisor;
        }
    }

    if(sumOfproperDivisors == num){
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");
    }
}

perfectNumber(6)