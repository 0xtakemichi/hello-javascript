// Cadenas de texto (strings)
let saludo = "Hola, mundo!"
let saludo2 = 'Hola, mundo!'
let saludo3 = `Hola, mundo!`

// Números (numer)
let number = 66 // Entero
let number2 = 3.14  // Decimal

// Booleanos (boolean)
let isTrue = true
let isFalse = false

// Undefuned
let undefindedValue 
console.log(undefindedValue) // undefined

//null
let nullValue = null
console.log(nullValue) // null

// Símbolos (symbols)
// Los símbolos son un tipo de dato primitivo introducido en ES6
// valores únicos e inmutables, útiles para propiedades de objetos
let mySymbol = Symbol('mi símbolo')
console.log(mySymbol) // Symbol(mi símbolo)

// BigInt
let myBigInt = BigInt(1234567890123456789012345678901234567890)
let myBigInt2 = 1234567890123456789012345678901234567890n

console.log(typeof saludo)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)