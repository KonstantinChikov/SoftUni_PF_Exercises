// Ex. IX*

function solve(input){

    // let userName;
    // var splitString = userName.split(""); 
    // var reverseArray = splitString.reverse(); 
    // var joinArray = reverseArray.join(""); 
    // let password = joinArray;

    let userName = input[0];

    let password = "";
    for(let i = userName.length - 1; i >= 0; i--){
        password += userName[i];
    }

    let guess = input[1];
    let index = 2;
    let wrongGuesses = 0;
    let blocked = false;

    while(guess != password){
        
        wrongGuesses++;
        if(wrongGuesses >= 4){
            console.log(`User ${userName} blocked!`);
            blocked = true;
            break;
        }

        console.log("Incorrect password. Try again.");
        guess = input[index];
        index++;
    }

    if(!blocked){
        console.log(`User ${userName} logged in.`);
    }
    
}

solve(['Acer','login','go','let me in','recA'])