// Ex. II

function solve(arrI, arrII) {
    for(let element of arrI){
        if(arrII.includes(element)){
            console.log(element);
        }
    }
}

solve(  
        ['Hey', 'hello', 2, 4, 'Peter', 'e'],
        ['Petar', 10, 'hey', 4, 'hello', '2']
     )