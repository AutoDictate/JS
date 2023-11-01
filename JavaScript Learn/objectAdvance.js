let person = {

    name : "Surya",
    age : 21,
    gender : "Male",
    address : {
        city : "Attur",
        state : "Tamil Nadu"
    },
    greetings : function(){
        console.log("hello "+ this.name);
    }
}

person.greetings();