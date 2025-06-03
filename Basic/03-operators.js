// Operators


// Arithmetic Operators
let a = 10;
let b = 5;
let sum = a + b; // Suma
let difference = a - b; // Resta
let product = a * b; // Multiplicación
let quotient = a / b; // División
console.log(`Suma: ${sum}, Resta: ${difference}, Multiplicación: ${product}, División: ${quotient}`);

// Módulo es el resto de la división
let remainder = a % b; // Módulo
let exponentiation = a ** b; // Exponenciación
console.log(`Módulo: ${remainder}, Exponenciación: ${exponentiation}`);

a++; // Incremento
b--; // Decremento
console.log(`Incremento de a: ${a}, Decremento de b: ${b}`);

// Assignment Operators
let myVariable = 2;
myVariable += 3; // Suma y asigna
myVariable -= 3;
myVariable *= 3;
myVariable /= 3;

// Opreradores de comparación
// igualdad por valor ==
// igualdad por identidad (por tipo y valor) ===
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(0 == false);
console.log(0 === false);
console.log(1 == true);
console.log(1 === true);
console.log(undefined == null);
console.log(undefined === null);

// Truty values
// todos los numeros positivos y negativos, excepto 0
// el boolean true

// Falsy values
// 0
// 0n
// null
// undefined
// NaN
// boolean false
// cadena de texto vacía ''

// Logical Operators
let x = true;
let y = false;
console.log(5 > 3 && 8 > 5); // AND
console.log(5 > 3 || 8 < 5); // OR
console.log(!(5 > 3)); // NOT

// Conditional (Ternary) Operator
const isRaining = true;
const message = isRaining ? 'Lleva paraguas' : 'No hace falta paraguas';
console.log(message);
// Nullish Coalescing Operator
const userInput = null;
const defaultInput = 'Valor por defecto';
const finalInput = userInput ?? defaultInput; // Si userInput es null o undefined, usa defaultInput
console.log(finalInput);