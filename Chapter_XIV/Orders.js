// Ex. IV

function orders(product, quantity) {

    let price = 0;
    let isA = true;

    if(product == "coffee"){
        price = 1.5;
    }else if(product == "water"){
        price = 1;
    }else if(product == "coke"){
        price = 1.4;
    }else if(product == "snaks"){
        price = 2;
    }else{
        isA = false
        console.log("The product is NOT available !");
    }

    if(isA){
        console.log((price*quantity).toFixed(2));
    }
}

orders("water", 5)
// orders("snaks", 8)

