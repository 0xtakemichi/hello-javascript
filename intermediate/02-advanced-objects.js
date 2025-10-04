// Objetos avanzados

// - Prototipos y Herencia

// Prototipos

let person = {
  name: "Felipe",
  age: 20,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

console.log(person.__proto__);
console.log(Object.getPrototypeOf(person));

person.sayAge = function () {
  console.log(`I am ${this.age} years old`);
};

console.log(person);
person.sayAge();

// Herencia

let programmer = Object.create(person);
programmer.name = "Naruto";
programmer.language = "JavaScript";
programmer.greet();
programmer.sayAge();
console.log(person.language);
console.log(programmer.language);
