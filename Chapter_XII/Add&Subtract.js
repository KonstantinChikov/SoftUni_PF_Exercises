// Ex. I

function solve(arr) {

    let sumNoMod = 0;
    let sumWithMod = 0;
    
    for(let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
        sumNoMod += arr[i];

        if(arr[i] % 2 === 0){
            arr[i] += i;
        }else{
            arr[i] -= i;
        }
        sumWithMod += arr[i]
        
    }
    console.log(arr);
    console.log(sumNoMod);
    console.log(sumWithMod);

}

solve([5, 15, 23, 56, 35])