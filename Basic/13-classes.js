// Clases
// Es una plantilla para crear objetos

class Person {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

// Sintaxis

let person = new Person("Felipe", 24, "Takemichi")
let person2 = new Person("Plague", 24, "Plague")
console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {
    constructor(name = "Nombre", age, alias = "Unknown") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person3 = new DefaultPerson("Plague", 25)
console.log(person3)

// Acceso a propiedades

console.log(person3.name)
console.log(person3["alias"])

person3.alias = "Plague2"
console.log(person3.alias)

// Funciones en clases

class Person2 {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
    fullName() {
        return `${this.name} ${this.alias}`
    }
    walk() {
        console.log(`${this.name} está caminando`)
    }
}

let person4 = new Person2("Felipe", 25, "Plague")
console.log(person4.fullName())
person4.walk()

// Propiedades privadas

class PrivatePerson {
    #bankAccount
    constructor(name, age, alias, bankAccount) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bankAccount = bankAccount
    }
    pay() {
        this.#bankAccount
    }
}

let person5 = new PrivatePerson("Felipe", 25, "Plague", "DA212314")
// No se puede acceder a la propiedad privada
// console.log(person5.#bankAccount)
// person5.bankAccount = "DA212314" // No se puede modificar desde fuera
console.log(person5)

// Getters y Setters
class GetSetPerson {
    #name
    #age
    #alias
    #bank
    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name() {
        return this.#name
    }
    set name(name) {
        this.#name = name
    }
    set bank(newBank) {
        this.#bank = newBank
    }
}

let person6 = new GetSetPerson("Felipe", 25, "Plague", "DA212314")
console.log(person6.name)
person6.name = "Plague2"
console.log(person6.name)
person6.bank = "333333"
console.log(person6.bank)