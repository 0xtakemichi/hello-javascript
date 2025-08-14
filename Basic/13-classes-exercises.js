// 1. Crea una clase que reciba dos propiedades
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    static greet() {
        console.log("¡Hola!");
    }
}

// 2. Añade un método a la clase que utilice las propiedades
Person.prototype.introduce = function() {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años.`)
}

// 3. Muestra los valores de las propiedades e invoca a la función
const person = new Person("Plague", 25)
console.log(person.name)
console.log(person.age)
person.introduce()

// 4. Añade un método estático a la primera clase
Person.staticMethod = function() {
    console.log("Método estático.")
}

// 5. Haz uso del método estático
Person.staticMethod()
Person.greet()

// 6. Crea una clase que haga uso de herencia
class Animal {
    constructor(name, species) {
        this.name = name
        this.species = species
    }
}
class Cat extends Animal {
    constructor(name, age, color) {
        super(name, "Cat")
        this.age = age
        this.color = color
    }
    introduce(){
        console.log(`${this.name} ${this.age} ${this.color}.`);
    }
}

// 7. Crea una clase que haga uso de getters y setters
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age)
        this.position = position
    }
    getPosition() {
        return this.position
    }
    setPosition(newPosition) {
        this.position = newPosition
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class PrivateEmployee extends Employee {
    #position
    constructor(name, age, position) {
        super(name, age)
        this.#position = position
    }
    getPosition() {
        return this.#position
    }
    setPosition(newPosition) {
        this.#position = newPosition
    }
}

// 9. Utiliza los get y set y muestra sus valores
const privateEmployee = new PrivateEmployee("Naruto", 30, "Junior Developer")
console.log(privateEmployee.getPosition())
privateEmployee.setPosition("Senior Developer")
console.log(privateEmployee.getPosition())

// 10. Sobrescribe un método de una clase que utilice herencia
class TalkingCat extends Cat {
    constructor(name, age, color) {
        super(name, age, color)
    }
    introduce() {
        console.log(`Miau! Soy ${this.name}, un gato de color ${this.color} y tengo ${this.age} años.`)
    }
}
const demon = new TalkingCat("Michi", 3, "naranja")
demon.introduce()