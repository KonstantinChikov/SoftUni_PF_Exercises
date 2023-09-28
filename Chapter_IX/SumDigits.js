// Ex. I

function solve(userNumber) {
    userNumber = userNumber.toString();
    let sum = 0;
    for(let i = 0; i < userNumber.length; i++){
        sum += Number(userNumber[i]);
    }

    console.log(sum);
}

solve(245678)