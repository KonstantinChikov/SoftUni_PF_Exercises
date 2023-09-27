// Ex. I

function solve(userInput){
    let type = typeof(userInput);

    if(type === "string" || type === "number"){
        console.log(type);
        console.log(userInput);
    }else{
        console.log("object");
        console.log("Parameter is not suitable for printing");
    }
}

solve(18)