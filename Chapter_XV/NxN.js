// Ex. VII

function NxN(num) {
    for(let row = 0; row < num; row++){
        let curRow = `${num} `.repeat(num);
        console.log(curRow);
    }
}

NxN(3)