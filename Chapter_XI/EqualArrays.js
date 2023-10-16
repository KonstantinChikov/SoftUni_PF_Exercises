// Ex. VII

function solve(arrI, arrII) {
    let sumArrI = 0;
    let sumArrII = 0;

    for(let i = 0; i < arrI.length; i++){
        arrI[i] = Number(arrI[i]);
        sumArrI+=arrI[i];
    }
    for(let i = 0; i < arrII.length; i++){
        arrII[i] = Number(arrII[i]);
        sumArrII+=arrII[i];
    }

    let areEqual = true;
    for(let i = 0; i < arrI.length; i++){
        if(arrI[i] !== arrII[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }
    if(areEqual){
        if(sumArrI === sumArrII){
            console.log(`Arrays are identical. Sum: ${sumArrI}`);
        }
    }
}

solve(  
        ['10','20','30'],
        ['10','20','30']
     )


solve(  
        ['1','2','3','4','5'],
        ['1','2','4','4','5']
     )