// Constructor Functions
/*
    1. Pascal Funcction
    2. this should be used
    3. 'new' keuword should be used
*/


function Person(name){  // Pascal Format -> MyName -> used for better understanding
    this.name = name;
    this.greeting = function(){
        console.log(`My name is ${this.name}`);
    }
}

let person = new Person("Surya");
person.greeting();

