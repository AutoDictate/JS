// Mind Method

var student = {
    details: function print_name(age,status){
        console.log(this.name);
        console.log(age);
        console.log(status);
    }
}


var surya = {
    name : "Surya"
}

var print = student.details.bind(surya, 21,"Unemployed");

print();

function print_name(age,status){
        console.log(this.name);
        console.log(age);
        console.log(status);
    }



var surya = {
    name : "Surya"
}

var print = student.details.bind(surya, 21,"Unemployed");

print();

