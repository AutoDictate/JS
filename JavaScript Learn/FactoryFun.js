// Factory Functions

function createPerson(name){    // Camel Case : myName

    return {
        name,
        greeting(){
            let msg = `My name is ${this.name}`;
            console.log(msg);
        }
    };
}

let surya = createPerson("Surya");
let single = createPerson("Single");
surya.greeting()
single.greeting()
