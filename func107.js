const User = new Function(
    "name",
    "email",
    "password",
    "this.name = name;"; "this.email = email;";"this.password = password;"
    

);
const user1 = new User("Meilly", "meii1524365@gmail.com", "55669988Po");

console.log(user1.name);
console.log(user1.email);
console.log(user1.password);
