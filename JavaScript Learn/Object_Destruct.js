// Object Destructing

const suryaDetails = {
    name : "Jayasurya",
    age : 21,
    address: "Salem, Tamil Nadu",
    profession : "Engineering",
    hobby : function hobbies(){
        console.log("I love to clean my room");
        console.log("I love to watch Anime");
    },
    status : "Single"
}


const { name, age, hobby, ...restDetails } = suryaDetails;

console.log(`Student Name is ${name} and their age is ${age}` );

hobby();

console.log(restDetails);