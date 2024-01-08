/** The Purpose of "this" keyword
 * 
The “this” keyword refers to the object that the function is a property of.

The value of the “this” keyword will always depend on the object that is invoking the function.*/


const surya = {
    name : 'surya',
    getName : function(){
        console.log(this.name);
        // this key word points to the object where it has been called ,, line 20
    }
}

let getName = surya.getName;

let selva = {
    name : "Selva",
    getName,
    // Here the this keyword points to the function in surya-> Object 
    // the name ->"Selva" is passed to function "getName" in surya object 'this.name' points to "Selva"
}

console.log(selva.getName());