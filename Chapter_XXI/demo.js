
let person = {
    firstName: 'Ilian',
    age: 21,
    height: 191,
    sayHello: function(){
        console.log('Hello' + ' ' + this.firstName + ' ' + this.lastName);
    },
    lastName: 'Petrov',
};

person.sayHello();      // <= the function is allready in the class


person.sayFirstName = function () {
    console.log(person.firstName);
};
person.sayFirstName();                  // <= added the function later


person.sayLastName = /*function*/ () => {
    console.log(person.lastName);
};
person.sayLastName();                  // <= added the function later, but it is a " => " function"