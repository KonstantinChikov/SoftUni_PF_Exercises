// Ex. II

function solve(M, N){

    if(N > 15){
        N = 15;
    }
    console.log(parseFloat(M.toFixed(N)));
}

solve(3.1415926535897932384626433832795, 2)