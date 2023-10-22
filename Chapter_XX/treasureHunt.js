// Ex. II

function treasureHunt(arr) {
    let loot = arr.shift().split('|');
    let command = arr.shift();

    while(command != "Yohoho!"){
        let token = command.split(' ');
        let action = token.shift();

        if(action == 'Loot'){
            token.filter(item => !loot.includes(item)).forEach(item => loot.unshift(item));

            // for(let item of items){                      // ".filter()" --> filters a given array in the way you said in the brackets.
            //     loot.unshift(item);   ---->    // this "for of" does the exact same thing as the above ".forEach()".
            // }
        }else if(action == 'Drop'){
            let idx = Number(token.shift());

            if(idx >= 0 && idx < loot.length){
                let removedItem = loot.splice(idx, 1).shift();          // ".splice()" --> removes an element(s) of the array at a given index
                loot.push(removedItem);
            }
        }else if(action == 'Steal'){
            let count = Number(token.shift());
            let stolenItems = loot.splice(-count);
            console.log(stolenItems.join(', '));
        }

        command = arr.shift();
    }

    if(loot.length == 0){
        console.log("Failed treasure hunt.");
    }else{
        let totalGain = 0;
        for(let item of loot){
            totalGain += item.length;
        }
        let avgGain = totalGain / loot.length;
        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    }
}

treasureHunt(([
                    "Gold|Silver|Bronze|Medallion|Cup",
                    "Loot Wood Gold Coins",
                    "Loot Silver Pistol",
                    "Drop 3",
                    "Steal 3",
                    "Yohoho!"
            ]))