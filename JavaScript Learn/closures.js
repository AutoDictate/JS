// Closures

function randomFunc(){
    var details = {
        name: "Surya",
        age : 21,
    }

    return function(){
        console.log(`My name is ${details.name} and age is ${details.age}`);
    }
}

var innerFunction =randomFunc();
innerFunction();