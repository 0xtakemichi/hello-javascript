// maps
// es una coleccion de pares clave-valor

let myMap = new Map()

myMap = new Map([
    ["nombre", "felipe"],
    ["edad", 25],
    ["profesion", "programador"],
    ["email", "@gmail.com"]
])

console.log(myMap)

// Métodos y propiedades

// set
myMap.set("nombre", "alonso")
myMap.set("apodo", "0xtakemichi")
console.log(myMap)

// get
console.log(myMap.get("nombre"))
console.log(myMap.get("apodo"))

// has
console.log(myMap.has("nombre"))
console.log(myMap.has("age"))

// delete
myMap.delete("email")
console.log(myMap)

// keys, values, entries
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size
console.log(myMap.size)

// forEach
myMap.forEach((value, key) => {
    console.log(key, value)
})

// clear
myMap.clear()
console.log(myMap)
