// Ex. III
    //  use ASCII table

function charactersInRange(char1, char2) {
    let code1 = char1.charCodeAt(0);                                                                                    // 97.
    let code2 = char2.charCodeAt(0);    // ".charCodeAt(0)" --> gives the ASCII code of a simble.   // in this case it is 100.
    
    let minCode = Math.min(code1, code2);
    let maxCode = Math.max(code1,code2);


    function printResult(minCode, maxCode){
        
        let result = '';
        for(let curCode = minCode +1; curCode < maxCode; curCode++){
            let curChar = String.fromCharCode(curCode);
            result += `${curChar} `;
        }

        console.log(result);   
    }

    printResult(minCode, maxCode);

}

charactersInRange('a', 'd')