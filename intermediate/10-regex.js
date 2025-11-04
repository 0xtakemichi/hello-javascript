// Expresiones Regulares

// Sintaxis

const regex = /abc/;
const regex2 = new RegExp("abc");

const text = "Pastel de Choclo con abc";

// Test (devuelve true o false)

console.log(regex.test(text));
console.log(regex2.test(text));

const regex3 = /\d/g;
const regex4 = /[3-5]/;
const text2 = "mi edad es de 15";

console.log(regex3.test(text2));
console.log(regex4.test(text2));

// replace (reemplaza el texto que coincida con la patrón)

const regex5 = /JavaScript/;
console.log("Hola JavaScript".replace(regex5, "JS"));
console.log("Contando: 1 2 3 4 5 6 7".replace(regex3, "[X]"));
