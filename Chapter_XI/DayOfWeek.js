// Ex. II

function solve(num) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    if(num <= 7 && num != 0){
        console.log(days[num-1]);
    }else{
        console.log("Invalid day!");
    }
}

solve(0)