// Scopes in Javascript


var value = 20;

function call1(){
    return value;
}

function call2(){
    return call1();
}

console.log(call2);