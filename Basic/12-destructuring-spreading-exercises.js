// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let myArray = [1, 3, 5, 7, 9]
let [first, second] = myArray
console.log(`${first}, ${second}`)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let myArray2 = [25]
let [a = 0, b = 0, c = 10] = myArray2
console.log(`${a}, ${b}, ${c}`)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    name: 'Felipe',
    age: 24,
    country: 'Chile',
    profession: 'Software Developer'
}
let { name: personName, age } = person
console.log(`${personName}, ${age}`)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let { name: nombre, age: edad, country: pais} = person
console.log(nombre, edad, pais)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let person2 = {
    name: 'Felipe Takemi',
    age: 25,
    country: 'Chile',
    profession: 'Developer',
    job: {
        name: 'IngeBIM',
        position: 'Developer'
    }
}
let { job: {name: empresa, position: puesto} } = person2
console.log(empresa, puesto)

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray3 = [...myArray, ...myArray2]
console.log(myArray3)

// 7. Usa propagación para crear una copia de un array
let myArrayCopy = [...myArray]
console.log(myArrayCopy)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let personList = { ...person, ...person2, email: "felipe@example.com" }
console.log(personList)

// 9. Usa propagación para crear una copia de un objeto
let object = { ...person }
console.log(object)

// 10. Combina desestructuración y propagación
let { name: primerNombre, age: anos, ...rest} = person2
console.log(primerNombre, anos, rest)