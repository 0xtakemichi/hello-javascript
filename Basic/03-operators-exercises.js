// 1. Crea una variable para cada operación aritmética
let a = 10;
let b = 5;
let sum = a + b; // Suma
let difference = a - b; // Resta
let product = a * b; // Multiplicación
let quotient = a / b; // División
let remainder = a % b; // Módulo
let exponentiation = a ** b; // Exponenciación

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let num = 5
num += 5 // Suma con asignación
num -= 5 // Resta con asignación
num *= 5 // Multiplicación con asignación
num /= 5 // Division con asignación
num %= 5 // Residuo o Módulo con asignación
num **= 5 // Exponente con asignación

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(a > b)
console.log(a >= 5 && b >= 5)
console.log(!(a < b))
console.log(a != b)
console.log(a !== b)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a < b)
console.log(a <= 5 && b <= 5)
console.log(a == b)
console.log(a === b)
console.log(a <= b)

// 5. Utiliza el operador lógico and
console.log(a > b && b > a)

// 6. Utiliza el operador lógico or
console.log(a > b || b > a)

// 7. Combina ambos operadores lógicos
console.log(a > b && b > a || a < b)

// 8. Añade alguna negación
console.log(!(a > b))

// 9. Utiliza el operador ternario
const isChecked = false
const message = isChecked ? 'Checked' : 'Not checked'
console.log(message)

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(a > b && b > a || a < b)