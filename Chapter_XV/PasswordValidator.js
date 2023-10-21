// Ex. VI

function passwordValidator(pass){
    

    let isValidLength = checkPassLength(pass);
    let isOnlyLettersAndDigits = checkOnlyLettersAndDigits(pass);
    let isMin2Digits = checkMin2Digits(pass);

    if(isValidLength && isOnlyLettersAndDigits && isMin2Digits){
        console.log("Password is valid");
    }


    function checkPassLength(pass){
        if(pass.length >= 6 && pass.length <= 10){
            return true;
        }else{
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

            // need to use ASCII, because we have't reached the Regular Expressions
    function checkOnlyLettersAndDigits(pass){
        for(let curChar of pass){
            let code = curChar.charCodeAt(0);

            if(
                !((code >= 48 && code <= 57) ||     // digits 
                  (code >= 65 && code <= 90) ||     // upper case
                  (code >= 97 && code <= 122 ))     // lower case
            ){
                console.log("Password must consist only of letters and digits");
                return false;
            }
        }
        return true;
    }


    function checkMin2Digits(pass){
        let digitsCounter = 0;

        for(let curChar of pass){
            let code = curChar.charCodeAt(0);

            if(code >= 48 && code <= 57){
                digitsCounter++;
            }
        }

        if(digitsCounter < 2){
            console.log("Password must have at least 2 digits");
            return false;
        }else{
            return true;
        }
    }

}

passwordValidator('logIn')