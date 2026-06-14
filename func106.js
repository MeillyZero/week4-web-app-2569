const greet = (name = "Meilly") => (
    return `Hello, ${name}!`
);

console.log(greet());//output: Hello, Meilly!
console.log(greet("John"));//output: Hello, Meilly!
