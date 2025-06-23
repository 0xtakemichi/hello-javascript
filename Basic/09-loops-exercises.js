// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
  console.log(`Número: ${i}`);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`Suma total: ${sum}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(`Número par: ${i}`);
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let names = ["Felipe", "Victor", "Macarena", "David", "Mauricio"];
for (let i = 0; i < names.length; i++) {
  console.log(`Nombre: ${names[i]}`);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let myString = "Hola Mundo";
let count = 0;
for (let i = 0; i < myString.length; i++) {
  myString.toLowerCase();
  if (
    myString[i] === "a" ||
    myString[i] === "e" ||
    myString[i] === "i" ||
    myString[i] === "o" ||
    myString[i] === "u"
  ) {
    count++;
  }
}
console.log(`Número de vocales: ${count}`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numbers = [1, 2, 3, 4];
let i = 0;
let product = 1;

while (i < numbers.length) {
  product *= numbers[i];
  i++;
}
console.log(`Producto total: ${product}`);

let product2 = 1;
for (let i = 0; i < numbers.length; i++) {
  product2 *= numbers[i];
}
console.log(`Producto total: ${product2}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let i2 = 1;
while (i2 < 10) {
  console.log(`5 x ${i2} = ${5 * i2}`);
  i2++;
}

// 8. Usa un bucle para invertir una cadena de texto
let myString2 = "hola mundo mundial";
let invertedString = "";
for (let i = 0; i < myString2.length; i++) {
  console.log(invertedString);
  invertedString = myString2[i] + invertedString;
}
console.log(invertedString);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let result = 0;
let prev = 0;
let plus = 1;
for (let i = 0; i <= 10; i++) {
    result = prev + plus
    console.log(`${prev} + ${plus} = ${result}`);
    prev = plus
    plus = result
}

let fibonacci = [0, 1];

for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    console.log(`${fibonacci[i - 2]} + ${fibonacci[i - 1]} = ${fibonacci[i]}`);
}

console.log(fibonacci);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let numbers2GreaterThan10 = [];

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > 10) {
        numbers2GreaterThan10.push(numbers2[i]);
    }
}
console.log(numbers2GreaterThan10);



