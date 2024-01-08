// Call method 


// This method allows the object to use some functions


//Example

function print_name(status){
    
    console.log("Name : " + this.name,"Age : ",this.age);
    console.log(status);
}

var names = {
    name : "Surya",
    age : 21
}

print_name.call(names,"Unemployed");