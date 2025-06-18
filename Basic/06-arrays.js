// array

let myArray = []
let myArray2 = new Array()

myArray = [4]
myArray2 = new Array(4)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["hola", "adios", "world", 24, false]
myArray2 = new Array("hola", "adios", "world", 24, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "hola"
myArray2[2] = "adios"

console.log(myArray2)

// Métodos comunes
// push y pop

myArray = []
myArray.push("hola")
myArray.push("adios")
myArray.push(44)
console.log(myArray)
myArray.pop()
console.log(myArray)
console.log(myArray.pop())

// shift y unshift

myArray = []
// agrega elementos al inicio
myArray.unshift("hola")
myArray.unshift("adios")
myArray.unshift(44)
console.log(myArray)
// elimina elementos al inicio
myArray.shift()
console.log(myArray)

// length

console.log(myArray.length)

// clear
myArray = []
myArray = [1, 2, 3, 4, 5]

// slice
// tiene en cuenta el primer indice y el ultimo no
console.log(myArray.slice(1, 3))

// splice
// elimina elementos desde el primer indice y el ultimo si se especifica
myArray.splice(1, 3)
console.log(myArray)
