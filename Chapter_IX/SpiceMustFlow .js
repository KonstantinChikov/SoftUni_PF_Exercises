// Ex. X*

function solve(startingYield){

    let totalYield = 0;
    let workersPay = 0;
    let days = 0;

    while(true){
        if(startingYield < 100){
            workersPay += 26;
            break;
        }
        days++;
            totalYield += startingYield;
            workersPay += 26;
            startingYield -= 10;
    }
    if(workersPay > totalYield){
        console.log(days);
        console.log(0);
    }else{
        console.log(days);
        console.log(totalYield - workersPay);
    }
}

solve(99)