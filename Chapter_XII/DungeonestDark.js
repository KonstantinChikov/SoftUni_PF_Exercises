// Ex. IX*

function solve(arr) {
    let roomsInfo = arr[0];
    let roomsArr = roomsInfo.split('|');    // ".split()" --> splits the string(where the given char sits), 
                                            //                  into different elements and puts them in an array.

    let health = 100;
    let money = 0;
    let isDead = false;
    let roomCount = 0;

    for(room of roomsArr){
        roomCount++;

        let elements = room.split(' ');
                let object = elements[0];
                let objectSize = Number(elements[1]);

        if(object == "potion"){
            //                 this         ifYes then >       ifNot then >
            let newHP = health + objectSize <= 100?  objectSize : 100 - health;   //  ternary operator
                health += newHP;
            console.log(`You healed for ${newHP} hp.`);
            console.log(`Current health: ${health} hp.`);
        }else if(object == "chest"){
            money += objectSize;
            console.log(`You found ${objectSize} coins.`);
        }else{
            health -= objectSize;
            if(health <= 0){
                isDead = true;
                console.log(`You died! Killed by ${object}.`);
                console.log(`Best room: ${roomCount}`);
                break;
            }
            console.log(`You slayed ${object}.`);
        }
    }

    if(isDead == false){
        console.log("You've made it!");
        console.log(`Coins: ${money}`);
        console.log(`Health: ${health}`);
    }

}

// solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])