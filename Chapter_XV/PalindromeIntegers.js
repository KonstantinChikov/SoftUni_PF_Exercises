// Ex. V

function palindrome(arr){

        for(let num of arr){
            let isPalindrome = checkIfPalindrome(num);
            console.log(isPalindrome); 
        }


    function checkIfPalindrome(num){
        let numAsString = String(num);
        let reverstNumStr = "";
        let NumStr = "";

        for(let i = 0; i < numAsString.length; i++){
            let curChar = numAsString[i];
            reverstNumStr += curChar 
        }

        for(let i = numAsString.length - 1; i >= 0 ; i--){
            let curChar = numAsString[i];
            NumStr += curChar 
        }

        let isPalindrome = NumStr == reverstNumStr;
        return isPalindrome;
    }

}

palindrome([123,323,421,121])