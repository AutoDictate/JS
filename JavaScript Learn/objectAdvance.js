let person = {

    name : "Surya",
    age : 21,
    gender : "Male",
    interest : ['Learn new Things'],
    address : {
        city : "Attur",
        state : "Tamil Nadu"
    },
    greetings : function(){
        console.log("hello "+ this.name);
    }
}

const greet = (a,b)=>{
    console.log("hello Surya, What is this ??");
    console.log("The sum is ", a+b);
}

person.greetings();
let s = person.interest;
console.log(typeof(s));
console.log(greet(1,2));