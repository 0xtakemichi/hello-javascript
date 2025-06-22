// objects
// Coleccion de datos clave-valor

// Sintaxis

let person = {
    name: "felipe",
    age: 24,
    profession: "programador",
    email: "@gmail.com"
}

// Acceso a propiedades

// notacion punto
console.log(person.name)

// notacion corchetes
console.log(person["name"])

// Modificación de propiedades

person.name = "alonso"
console.log(person.name)

console.log(typeof person.age)
person.age = "24"
console.log(typeof person.age)

// Agregar propiedades

person.city = "Santiago"
console.log(person.city)

// Eliminar propiedades

delete person.city
console.log(person.city)

// Métodos (funciones)

let person2 = {
    name: "Felipe",
    lastName: "Takemichi",
    age: 24,
    profession: "programador",
    email: "@gmail.com",
    fullName: function () {
        return this.name + " " + this.lastName
    }
}
console.log(person2.fullName())

// objetos anidados

let person3 = {
    name: "Felipe",
    lastName: "Takemichi",
    age: 24,
    profession: "programador",
    email: "@gmail.com",
    fullName: function () {
        return this.name + " " + this.lastName
    },
    job: {
        name: "Developer",
        experience: 4,
        company: "IngeBIM",
        work: function () {
            console.log(`Con ${this.exp} esta trabajando...`)
        }
    }
}
console.log(person3)   
console.log(person3.job.name) 
person3.job.work()

// igualdad de objetos

let person4 = {
    name: "felipe",
    age: 24,
    profession: "programador",
    email: "@gmail.com"
}

console.log(person == person4)
console.log(person === person4)

console.log(person.profession == person4.profession)
console.log(person.profession === person4.profession)

// Iteración (iterar sobre objetos)

for (let key in person) {
    console.log(key + ": " + person[key])
}

// Función como objetos
// deberia ser una clase

function persona(name, lastName, age, profession, email) {
    this.name = name
    this.lastName = lastName
    this.age = age
    this.profession = profession
    this.email = email
    this.fullName = function () {
        return this.name + " " + this.lastName
    }
}

let person5 = new persona("Felipe", "Takemichi", 24, "programador", "@gmail.com")
console.log(person5)
console.log(person5.fullName())
