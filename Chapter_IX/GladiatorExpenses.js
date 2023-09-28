// Ex. IX*

function solve(loses, helmPrice, swordPrice, shieldPrice, armorPrice) {

    let brokenHelms = 0;
    let brokenSwords = 0;
    let brokenShields = 0;
    let brokenArmor = 0;

    let countLoses = 0;

    while(loses > 0){

        countLoses++
        let brokenH = false;
        let brokenS = false;
        if(countLoses % 2 == 0){
            brokenHelms++;
            brokenH = true;
        }
        
        if(countLoses % 3 == 0){
            brokenSwords++;
            brokenS = true;
        }

        if (brokenH && brokenS){
            brokenShields++;
            if(brokenShields % 2 == 0){
                brokenArmor++;
            }
        }

        loses--;
    }
    let expenses = (brokenHelms*helmPrice) + (brokenSwords*swordPrice) + (brokenShields*shieldPrice) + (brokenArmor*armorPrice);
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5)