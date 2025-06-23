// 1. Concatena dos cadenas de texto
let firstName = "Felipe"
let lastName = "Takemichi"
console.log(firstName + " " + lastName)

// 2. Muestra la longitud de una cadena de texto
console.log(`Longitud de cadena: ${firstName.length}`)

// 3. Muestra el primer y último carácter de un string
console.log(firstName[0])
console.log(firstName[firstName.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let fullName = `Nombre: ${firstName}
Apellido: ${lastName}`
console.log(fullName)

const mensaje = "Hola,\n" +
                "este es un mensaje\n" +
                "en varias líneas.";

console.log(mensaje);

// 6. Interpola el valor de una variable en un string
let saludo = `Hola, ${firstName} un gusto`
console.log(saludo)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let myString = "hola mundo, este es un mensaje con reemplazo"
myString = myString.replace(/ /g, "-")
console.log(myString)

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let myString2 = "hola mundo"
console.log(myString2.includes("mundo"))

// 9. Comprueba si dos strings son iguales
let myString3 = "hola mundo"
let myString4 = "hola mundo"
console.log(myString3 == myString4)
console.log(myString3 === myString4)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(myString3.length == myString4.length)
console.log(myString3.length === myString4.length)