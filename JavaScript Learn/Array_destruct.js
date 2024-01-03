// Array Destructing

// -- Unpacks an Elements

const names = ["Surya","Selva","Karthi","Moha","Chan","Sibi","Vimal","Sakthi"];

const nickNames = ["TB","Pavada","Karuvayan","Bangalore","Vadakan"]

const Frnds = [...names,...nickNames]

console.log(Frnds);


/** Find Maximum in an Array*/

const numbers = [1,2,3,4,5,6,7,8,9];
const letter = "Hola Buddy";

const max = Math.max(...numbers);

console.log(max);

console.log(...letter); // unpack the word into separate letters.   