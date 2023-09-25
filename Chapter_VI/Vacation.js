// Ex. IV

function solve(amount, type, day){

    let total = 0;
    let singlePrice = 0;
    switch(type){
        case "Students":
            switch(day){
                case "Friday":
                    singlePrice = 8.45;
                    break;
                case "Saturday":
                    singlePrice = 9.80;
                    break;
                case "Sunday":
                    singlePrice = 10.46;
                    break;
            }
        break;

        case "Business":
            switch(day){
                case "Friday":
                    singlePrice = 10.90;
                    break;
                case "Saturday":
                    singlePrice = 15.60;
                    break;
                case "Sunday":
                    singlePrice = 16;
                    break;
            }
        break;

        case "Regular":
            switch(day){
                case "Friday":
                    singlePrice = 15;
                    break;
                case "Saturday":
                    singlePrice = 20;
                    break;
                case "Sunday":
                    singlePrice = 22.50;
                    break;
            }
        break;
    }

    total = amount * singlePrice;

    if(type === "Students" && amount >= 30){
        total *= 0.85;
    }else if(type === "Business" && amount >= 100){
        let discountedPrice = 10 * singlePrice;
        total -= discountedPrice;
    }else if(type === "Regular" && amount >= 10 && amount <= 20){
        total *= 0.95;
    }

    console.log(`Total price: ${total.toFixed(2)}`);
}

solve(40, "Regular", "Saturday")