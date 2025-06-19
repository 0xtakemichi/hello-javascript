// sets
// no tiene indices
// no permite valores duplicados
let mySet = new Set()

mySet = new Set(["hola", "adios", "felipe", 25, "naruto"])
console.log(mySet)

// Métodos comunes
// add y delete

mySet.add("world")
console.log(mySet)

// retorna true si el elemento existe
mySet.delete("hola")
console.log(mySet)

// has
console.log(mySet.has("felipe"))

// size
console.log(mySet.size)

// convertir a array
let myArray = Array.from(mySet)
console.log(myArray)

// convertir array a set
mySet = new Set(myArray)
console.log(mySet)

// values
console.log(mySet.values())

// entries
console.log(mySet.entries())

// keys
console.log(mySet.keys())

// clear
mySet.clear()
console.log(mySet)

