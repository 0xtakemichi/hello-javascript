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
handler.arrowGreeting()