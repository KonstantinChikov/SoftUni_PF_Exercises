// Ex. IV --> Write a program, which prints the language, that a given country speaks. 
// You can receive only the following combinations:

//  · English is spoken in England and USA;
//  · Spanish is spoken in Spain, Argentina, and Mexico;
//  · For the others, we should print "unknown";

function solve(country){
    if(country === "England" || country === "USA"){
        console.log("English");
    }else if(country === "Spain" || country === "Argentina" || country === "Mexico"){
        console.log("Spanish");
    }else {
        console.log("unknown");
    }
}

solve('USA')