// Constructor Property

function Person(name){
    this.name = name;
    this.greeting = function(){
        let msg = `My name is ${this.name}`;
        console.log(msg);
    }
}
const person = new Person("Surya");

console.log(person.constructor);