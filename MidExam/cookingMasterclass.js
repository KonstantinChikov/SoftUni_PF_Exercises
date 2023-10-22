// Ex. I

function cookingMasterclass(input) {
    const [budget, students, priceFlour, priceEgg, priceApron] = input.map(parseFloat);
  
    const apronsNeeded = Math.ceil(students * 1.2);
    const totalCost = (students * priceFlour * 0.8) + (students * 10 * priceEgg) + (apronsNeeded * priceApron);
  
    if (totalCost <= budget) {
        console.log(`Items purchased for ${Math.ceil(totalCost).toFixed(2)}$.`);
    } else {
        const neededMoney = (totalCost - budget).toFixed(2);
        console.log(`${neededMoney}$ more needed.`);
    }
}

cookingMasterclass(['50', '2', '1.0', '0.10', '10.0']);
cookingMasterclass(['100', '25', '4.0', '1.0', '6.0']);