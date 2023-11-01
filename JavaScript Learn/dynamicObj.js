// Dynamic Objects 

/*
    1. When the object is declared as const, we cannot change the type of the variable-> line 11
    2. We can only change the value inside an Object (Person)
*/

const person = {
    name: "Surya"
}
// person = 34  which makes an error
person.age = 21;
person.greeting = function(){
    console.log("Hello there");
}

console.log(person);

delete person.age;

console.log(person);