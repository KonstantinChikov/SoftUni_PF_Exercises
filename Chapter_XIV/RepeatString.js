// Ex. III

function repeatString(str, n) {

    let buffer = "";
    for(let i = 0; i < n; i++){
        // console.log(str);
        buffer += str;
    }
    console.log(buffer);
}

repeatString("abc", 3)