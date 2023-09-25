// Ex. III

function solve(userNumber){

    if(userNumber % 10 === 0){
        console.log("The number is divisible by 10");
    }else if(userNumber % 7 === 0){
        console.log("The number is divisible by 7");
    }else if(userNumber % 6 === 0){
        console.log("The number is divisible by 6");
    }else if(userNumber % 3 === 0){
        console.log("The number is divisible by 3");
    }else if(userNumber % 2 === 0){
        console.log("The number is divisible by 2");
    }else{
        console.log("Not divisible");
    }
}

solve(1643)