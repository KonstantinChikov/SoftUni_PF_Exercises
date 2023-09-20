//Ex. XI

function solve(end){
    let total = 0;
        for(let j = 1; j <= end*2; j++){
            if(j % 2 === 0){

            }else{
                console.log(j);
                total += j;
            }
        }
        console.log(`Sum: ${total}`);
}

solve(5)