// 1. Crea un objeto con 3 propiedades
let person = {
    name: "Felipe",
    lastName: "Takemichi",
    age: 24
}

// 2. Accede y muestra su valor
console.log(person.name)
console.log(person.lastName)
console.log(person.age)

// 3. Agrega una nueva propiedad
person.city = "Santiago"
console.log(person.city)

// 4. Elimina una de las 3 primeras propiedades
delete person.age

// 5. Agrega una función e invócala
person.fullName = function () {
    return this.name + " " + this.lastName
}
console.log(person.fullName())

// 6. Itera las propiedades del objeto
for (let key in person) {
    console.log(key + ": " + person[key])
}

// 7. Crea un objeto anidado
let person2 = {
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

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(person2.job.name)
person2.job.work()

// 9. Comprueba si los dos objetos creados son iguales
console.log(person == person2)
console.log(person === person2)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(person.name == person2.name)
console.log(person.name === person2.name)