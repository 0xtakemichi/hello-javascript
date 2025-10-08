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

// - Polimorfismo

class Cat extends Animal {
  makeSound() {
    console.log("Miau");
  }
}
class Dog extends Animal {
  makeSound() {
    console.log("Guau");
  }
}

const cat = new Cat("Gato");
const dog = new Dog("Perro");
console.log(cat);
cat.makeSound();
console.log(dog);
dog.makeSound();

// - Mixins

const FlyMixin = {
  fly() {
    console.log(`${this.name} está volando`);
  },
};

class Bird extends Animal {}
class Dragon extends Animal {}

Object.assign(Bird.prototype, FlyMixin);
Object.assign(Dragon.prototype, FlyMixin);

const bird = new Bird("Piolin");
const dragon = new Dragon("Dragón");

console.log(bird);
bird.fly();
console.log(dragon);
dragon.fly();
