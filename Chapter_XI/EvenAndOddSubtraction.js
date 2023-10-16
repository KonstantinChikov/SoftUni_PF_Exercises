// Ex. VI --> Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

function solve(arr) {

    for(let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
    }
    
    let even = 0;
    let odd = 0;

    for(let num of arr){
        if(num % 2 === 0){
            even+=num;
        }else{
            odd+=num;
        }
    }

    if(odd > even){
        console.log(odd - even);
    }else{
        console.log(even-odd);
    }
    
}

solve([1,2,3,4,5,6])