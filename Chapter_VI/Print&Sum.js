// Ex. VI

function solve(M, N){
    let sum = 0;
    let buffer = ""
    for(let i = M; i <= N; i++){
        buffer += `${i} `;
        sum += i;
    }
    console.log(buffer);
    console.log(`Sum: ${sum}`);
}

solve(5, 10)