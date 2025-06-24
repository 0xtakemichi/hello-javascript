// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 2));

const sum2 = (a, b) => {
    return a + b
}
console.log(sum2(5, 5));


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let numbers = [11, 50, 2, 3, 50, 30];

function maxNumber(numbers) {
    return Math.max(...numbers)
}
console.log(maxNumber(numbers))

let numMax = 0
const maxNumber2 = (numbers) => {
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > numMax) {
            numMax = numbers[i]
        }
    }
    return numMax
}
console.log(maxNumber2(numbers))


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let str = "hola mundo"
let count = 0
const countVowels = (str) => {
    str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            count++
        }
    }
    return count
}
console.log(countVowels(str))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let strings = ["hola", "adios", "mundo"]
let stringsUpperCase = []

function stringsToUpperCase(strings) {
    for (let i = 0; i < strings.length; i++) {
        stringsUpperCase.push(strings[i].toUpperCase())
    }
    return stringsUpperCase
}
console.log(stringsToUpperCase(strings))


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let number = 38

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(number))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let array1 = ["hola", "adios", "mundo", 2, 5, 7]
let array2 = ["mundo", 2, 5, 7]

function commonElements(array1, array2) {
    return array1.filter(element => array2.includes(element))
}
console.log(commonElements(array1, array2))

function elementosComunes(array1, array2) {
    const conjunto = new Set(array2);
    const resultado = [];
    for (let i = 0; i < array1.length; i++) {
      if (conjunto.has(array1[i])) {
        resultado.push(array1[i]);
      }
    }
    return resultado;
}
console.log(elementosComunes(array1, array2))  

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sumPairs = 0
function sumPairsNumbers(numbers2) {
    for (let i = 0; i < numbers2.length; i++) {
        if (numbers2[i] % 2 === 0) {
            sumPairs += numbers2[i]
        }
    }
    return sumPairs
}
console.log(sumPairsNumbers(numbers2))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let squares = []

function squaresNumbers(numbers3) {
    for (let i = 0; i < numbers3.length; i++) {
        squares.push(numbers3[i] * numbers3[i])
    }
    return squares
}
console.log(squaresNumbers(numbers3))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let str2 = "hola mundo"
function reverseString(str2) {
    return str2.split(" ").reverse().join(" ")
}
console.log(reverseString(str2))

// 10. Crea una función que calcule el factorial de un número dado

function factorial(n) {
    if (n < 0) return undefined; // Factorial no definido para números negativos
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5))

function factorial2(n) {
    if (n < 0) return undefined;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
}
console.log(factorial2(5))