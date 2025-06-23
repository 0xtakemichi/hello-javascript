// 1. Crea un array que almacene cinco animales
let animals = ["gato", "perro", "gallina", "pez", "pájaro"]

// 2. Añade dos más. Uno al principio y otro al final
animals.push("león")
animals.unshift("tigre")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 1)
console.log(animals)

// 4. Crea un set que almacene cinco libros
let books = new Set()
books = new Set([
    "Padre Rico Padre Pobre",
    "Habitos Atomicos",
    "El poder del ahora",
    "Cien años de soledad",
    "El alquimista"
])
console.log(books)

// 5. Añade dos más. Uno de ellos repetido
books.add("Sapiens")
books.add("El alquimista")
console.log(books)

// 6. Elimina uno concreto a tu elección
books.delete("Sapiens")
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre
let months = new Map()
months = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"]
])
console.log(months)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(months.has(5))
console.log(months.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
months.set("verano", [12, 1, 2])
console.log(months)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let mySet = new Set(myArray)
let myMap = new Map()
myMap.set("meses", mySet)
console.log(myMap)