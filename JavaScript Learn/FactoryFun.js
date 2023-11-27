// Factory Functions

const createPerson=(name)=>{    // Camel Case : myName

    return {
        greeting(){
            let msg = `My name is ${name}`;
            console.log(msg);
        }
    };
}

let surya = createPerson("Surya");
let single = createPerson("Single");
surya.greeting();
single.greeting();
