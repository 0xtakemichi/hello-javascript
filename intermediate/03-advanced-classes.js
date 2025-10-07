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
