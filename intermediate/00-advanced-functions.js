// Funciones avanzadas

// Ciudadanos de primera clase
const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet('Felipe')

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

function returnGreeting () {
    return greet
}

processGreeting(greet, 'Takemichi')
const greet2 = returnGreeting()
greet2('Mikasa')

// Arrow functions avanzadas

// - Retorno implícito
const multiply = (a, b) => a * b
console.log(multiply(2, 3))

// - this léxico
const handler = {
    name: 'Takemi',
    greeting: function() {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}
handler.greeting()
handler.arrowGreeting();

// IIFE (Immediately Invoked Function Expression)
// Expresión de función invocada inmediatamente
(function() {
    console.log('IIFE clásico')
})();

(() => {
    console.log('IIFE con arrow function')
})();

// Parámetros Rest (...)
function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}
console.log(sum(1, 2, 3, 4, 5))

function sum2(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0)
}
// Parámetros Rest con destructuración
function sumWithDestructuring(...numbers) {
    const [first, second, ...rest] = numbers
    return first + second + rest.reduce((acc, curr) => acc + curr, 0)
}

// Spread Operator (...)
const numbers = [1, 2, 3, 4, 5]
function sumWithSpread(a, b, c) {
    return a + b + c
}
console.log(sumWithSpread(...numbers))

// Spread Operator con objetos
const person = { name: 'Takemichi', age: 18 }
function greetPerson({ name, age }) {
    console.log(`Hola, ${name}. Tienes ${age}.`)
}
greetPerson({ ...person })

// Closures (Clausuras)
// Permiten que una función acceda a su contexto léxico incluso cuando se invoca fuera de ese contexto
function createCounter() {
    let count = 0
    return function() {
        count++
        console.log(count)
    }
}
const counter = createCounter()
counter()
counter()
counter()