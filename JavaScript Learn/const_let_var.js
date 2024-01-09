/**
 *  keyword	            const	let	    var
 * -------------------------------------------
    global scope	  | no	    no	    yes
    function scope	  | yes	    yes	    yes
    block scope	      | yes	    yes	    no
    can be reassigned |	no	    yes	    yes
 */


var c =10;
let b =20;
function func(){
    const a =10;
    b=10;
}

// console.log(a); // a is not defined
func();
console.log(b);
console.log(c);