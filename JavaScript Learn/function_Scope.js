function outer (){
    var a=2;

    var mul2 = function(){
        console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written 
                          //inside the same function
    }
}

// console.log(a);

console.log(outer().mul2); // reference Error