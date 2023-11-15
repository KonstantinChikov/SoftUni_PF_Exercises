// Ex. II

function printCityParameters(city) {

    let keys = Object.keys(city);

        // let values = Object.values(city);
        // for(let i = 0; i < keys.length; i++){
        //     // console.log(keys[i] + ' -> ' + city[keys[i]]);
        //     console.log(keys[i] + ' -> ' + values[i]);                   // <-- this also works.
        // }

    for(let key of keys){
        console.log(key, '->', city[key]);
    }
}

printCityParameters({name:'Sofia',area: 492,population: 1238438,country: "Bulgaria",postCode: "1000"});