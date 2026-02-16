// Values are stored on the stack
const age = 25;
const name = "Faridat";

// Refrence Valus  are stored on the heap
const person = {
    name: "Faridat",
    age: 25
};

let newName = name;
newName = "Ajibola";

let newPerson= person;
newPerson.name = "bola";

console.log(name, newName);


