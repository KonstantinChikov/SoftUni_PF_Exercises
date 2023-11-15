// Ex. III

function solve(jasonStr) {

    let person  = JSON.parse(jasonStr)
    console.log(person.name);
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')