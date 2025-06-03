

let myName = "Naruto";
let myLastName = "Uzumaki";
let myFullName = myName + " " + myLastName; // Concatenación de cadenas
console.log(myFullName); // Imprime "Naruto Uzumaki"
console.log(typeof myFullName);

console.log(myFullName.length); // Longitud de la cadena
console.log(myFullName.toUpperCase()); // Convierte a mayúsculas
console.log(myFullName.toLowerCase()); // Convierte a minúsculas
console.log(myFullName.indexOf("Uzumaki")); // Encuentra la posición de una subcadena


console.log(myFullName.includes("Naruto")); // Verifica si contiene una subcadena
console.log(myFullName.startsWith("Naruto")); // Verifica si comienza con una subcadena
console.log(myFullName.endsWith("Uzumaki")); // Verifica si termina con una subcadena

console.log(myFullName.slice(0, 6)); // Extrae una subcadena (desde el índice 0 hasta el 6)
console.log(myFullName.substring(0, 6)); // Extrae una subcadena (desde el índice 0 hasta el 6)
console.log(myFullName.replace("Uzumaki", "Hokage")); // Reemplaza una subcadena por otra
console.log(myFullName.split(" ")); // Divide la cadena en un array usando el espacio como separador