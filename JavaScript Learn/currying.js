// Currying is an advanced technique to transform a function of arguments n, 
// to n functions of one or fewer arguments.

// function func1(a){
//     return function (b){
//         return a+b;
//     }
// }

// func1(3)(4);

function outer(a){
    return function(b){ // inner Function
        return a+b;
    }
}

const innerFunction = outer(3);

const result = innerFunction(4);

console.log(result);