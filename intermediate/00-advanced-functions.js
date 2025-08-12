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