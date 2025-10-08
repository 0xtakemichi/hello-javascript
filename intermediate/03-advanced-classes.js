// Clases Avanzadas

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Mi nombre es ${this.name}`);
  }
}

const person = new Person("Felipe", 20);
person.greet();

person.sayAge = function () {
  console.log(`Tengo ${this.age} años`);
};
person.sayAge();

// Clases abstractas

class Animal {
  constructor(name) {
    if (new.target === Animal) {
      throw new Error("No se puede instanciar una clase abstracta");
    }
    this.name = name;
  }
  makeSound() {
    throw new Error("Este método debe ser implementado por la subclase");
  }
}

// Error
// const animal = new Animal("Animal");
// console.log(animal);
