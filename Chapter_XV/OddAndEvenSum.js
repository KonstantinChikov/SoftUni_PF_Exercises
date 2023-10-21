// Ex. IV

function oddAndEvenSum(num) {
    let evenSum = 0;
    let oddSum = 0;

    let numToString = String(num);
    
    for(let char of numToString){
        let charToInt = Number(char);
        if(charToInt % 2 == 0){
            evenSum += charToInt;
        }else{
            oddSum += charToInt;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435)