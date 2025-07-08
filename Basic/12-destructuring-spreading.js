let myArray = [1, 2, 3, 4]

let person = {
    name: 'Felipe',
    age: 24,
    country: 'Chile',
    profession: 'Developer'
}

// Desestructuración
// Datos de array u objetos

 // Desestructuración de arrays

// Sintaxis arrays

let [myValue1, myValue2, myValue3, myValue4, myValue5] = myArray
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)

// Sintaxis array con valores por defecto

let [myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0, myValue10 = 0] = myArray
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)
console.log(myValue10)

// Ignorar valores de un array
let [myValue11, , , myValue14] = myArray
console.log(myValue11)
console.log(myValue14)

// Sintaxis de objetos
let { name, age, country, profession } = person
console.log(name)
console.log(age)
console.log(country)
console.log(profession)

// Sintaxis de objetos con valores por defecto
let {name2 = 'takemi', age2 = 0, country2 = 'Chile', profession2 = 'Developer'} = person
// no existe name2, age2, country2, profession2

// Sintaxis de objetos con renombrado de variables
let { name: myName, age: myAge, country: myCountry, profession: myProfession } = person
console.log(myName)
console.log(myAge)
console.log(myCountry)
console.log(myProfession)

// Objetos anidados
let person2 = {
    name: 'Felipe',
    age: 24,
    country: 'Chile',
    profession: 'Developer',
    job: {
        name: 'Google',
        position: 'Software Engineer'
    }
}
let { name: name4, job: {name: jobName} } = person2

console.log(name4)
console.log(jobName)

// Spreading (Propagación de valores)

let myArray2 = [...myArray]
console.log(myArray2)

let myArray3 = [...myArray, 5, 6, 7]
console.log(myArray3)

let myArray4 = [...myArray, ...myArray3]
console.log(myArray4)

// Spreading de objetos
let person3 = { ...person }
console.log(person3)

let person4 = { ...person, email: 'felipe@example.com' }
console.log(person4)
