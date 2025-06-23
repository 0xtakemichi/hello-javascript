// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let firstName = "Felipe"
if (firstName == "Felipe") {
    console.log(firstName)
} else {
    console.log("No es Felipe")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Takemichi"
let password = "3333"
if (user == "Takemichi" && password == "3333") {
    console.log("Bienvenido")
} else {
    console.log("Usuario o contraseña incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 0
if (number >= 0) {
    console.log("El número es positivo")
} else if (number < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 15
if (age >= 18) {
    console.log("Puede votar")
} else {
    console.log(`Faltan ${18 - age} años para votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let age2 = 24
let message = age2 >= 18 ? "Adulto" : "Menor"
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let month = 7
if (month >= 3 && month <= 5){
    console.log("Otoño")
} else if (month >= 6 && month <= 8) {
    console.log("Invierno")
} else if (month >= 9 && month <= 11) {
    console.log("Primavera")
} else {
    console.log("Verano")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    console.log("Este mes tiene 31 días");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("Este mes tiene 30 días");
} else if (month === 2) {
    console.log("Este mes tiene 28 o 29 días (dependiendo si es año bisiesto)");
} else {
    console.log("Mes no válido");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = "es"
switch (language) {
    case "es":
        console.log("Hola")
        break
    case "en":
        console.log("Hello")
        break
    case "br":
        console.log("Olá")
        break
    case "fr":
        console.log("Bonjour")
        break
    default:
        console.log("Idioma no válido")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let month2 = 1
switch (month2) {
    case 12:
    case 1:
    case 2:
        console.log("Verano")
        break
    case 3:
    case 4:
    case 5:
        console.log("Otoño")
        break
    case 6:
    case 7:
    case 8:
        console.log("Invierno")
        break
    case 9:
    case 10:
    case 11:
        console.log("Primavera")
        break
    default:
        console.log("Mes no válido")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let month3 = 2
switch (month3) {
    case 12:
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Este mes tiene 31 días");
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Este mes tiene 30 días");
        break
    case 2:
        console.log("Este mes tiene 28 o 29 días (dependiendo si es año bisiesto)");
        break
    default:
        console.log("Mes no válido");
}